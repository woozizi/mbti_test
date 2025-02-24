import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TestPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    const resultData = {
      nickname: user.nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date(),
      userId: user.userId,
    };
    try {
      await createTestResult(resultData);
      setResult(mbtiResult);
    } catch (error) {
      console.error("에러발생", error);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/testResults");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold  transition duration-300 hover:bg-white hover:text-red-500"
            >
              다른 사람 MBTI 구경가기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
