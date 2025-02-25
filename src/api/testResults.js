import { jsonApi } from "./axios";

//테스트 결고 가져오기
export const getTestResults = async () => {
  const { data } = await jsonApi.get("/testResults");
  return data;
};

//테스트 결과 생성
export const createTestResult = async (resultData) => {
  const { data } = await jsonApi.post("/testResults", resultData);
  return data;
};

//테스트 비공개 공개 처리
export const updateTestResultVisibility = async (id, visibility) => {
  const { data } = await jsonApi.patch(`/testResults/${id}`, { visibility });
  return data;
};

//테스트 지우기
export const deleteTestResult = async (id) => {
  const { data } = await jsonApi.delete(`/testResults/${id}`);
  return data;
};
