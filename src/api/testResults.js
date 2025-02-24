import { jsonApi } from "./axios";

export const getTestResults = async () => {
  const { data } = await jsonApi.get("/testResults");
  return data;
};

export const createTestResult = async (resultData) => {
  const { data } = await jsonApi.post("/testResults", resultData);
  return data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const { data } = await jsonApi.patch(`/testResults/${id}`, { visibility });
  return data;
};

export const deleteTestResult = async (id) => {
  const { data } = await jsonApi.delete(`/testResults/${id}`);
  return data;
};
