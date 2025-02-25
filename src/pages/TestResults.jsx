import TestResultList from "../components/TestResultList";

const TestResult = () => {
  return (
    <div className="h-full w-full flex justify-center  bg-gray-50 ">
      <div className="bg-white px-8  rounded-lg shadow-md w-full max-w-lg">
        <h1 className=" p-4 mb-4 font-semibold">전체 테스트 결과</h1>
        <TestResultList />
      </div>
    </div>
  );
};

export default TestResult;
