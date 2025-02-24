import TestResultList from "../components/TestResultList";

const TestResult = () => {
  return (
    <div className="h-full w-full flex justify-center  bg-gray-50">
      <div className="bg-white m-8 p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">전체 테스트 결과</h1>
        <TestResultList />
      </div>
    </div>
  );
};

export default TestResult;
