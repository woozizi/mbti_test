import { useState } from "react";
import { updateProfile } from "../api/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TestResultItem from "../components/TestResultItem";
import useTestResults from "../hooks/userTestResults";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState(user?.nickname || "");

  const { testResults, isError, isPending, mutateVisibility, mutateDelete } =
    useTestResults();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", nickname);

      const token = user.accessToken;
      const response = await updateProfile(formData, token);

      setUser({
        ...user,
        nickname: response.nickname,
      });
      alert("닉네임 수정이 완료했습니다.");
    } catch (error) {
      console.error("error", error);
      alert("닉네임 수정에 실패했습니다.");
    }
  };

  const filterResults = testResults
    .filter((result) => result.userId === user.userId)
    .sort((a, b) => (b.date > a.date ? 1 : -1));

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white px-8 rounded-lg shadow-md w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="p-4 my-4 mx-8 rounded-lg shadow-md "
        >
          <div>
            <label className=" mb-4 text-base">현재 닉네임 : </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => handleNicknameChange(e)}
              className=" pl-2 py-1 border border-gray-300 rounded-lg mb-4 "
              placeholder={nickname}
              required
            />
          </div>
          <button
            type="submit"
            className=" px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-white hover:text-red-500"
          >
            닉네임 변경
          </button>
        </form>
        <h2 className="block my-4 font-semibold">나의 테스트 결과</h2>
        <div className=" space-y-4 mb-8">
          {filterResults.map((result) => (
            <TestResultItem
              key={result.id}
              result={result}
              isOwner={result.userId === user.userId}
              onVisibilityChange={mutateVisibility}
              onDelete={mutateDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
