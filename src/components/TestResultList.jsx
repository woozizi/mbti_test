import { useContext } from "react";
import TestResultItem from "./TestResultItem";
import { AuthContext } from "../context/AuthContext";
import useTestResults from "../hooks/userTestResults";

const TestResultList = () => {
  const { user } = useContext(AuthContext);
  const { testResults, isError, isPending, mutateVisibility, mutateDelete } =
    useTestResults();

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  //공개 및 내 테스트 결과 최신순으로
  const filterResults = testResults
    .filter((result) => result.visibility || result.userId === user.userId)
    .sort((a, b) => (b.date > a.date ? 1 : -1));

  return (
    <div>
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
  );
};

export default TestResultList;
