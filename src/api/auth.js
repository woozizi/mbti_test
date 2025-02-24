import { serverApi } from "./axios";

export const register = async (userData) => {
  try {
    const { data } = await serverApi.post(`/register`, userData);
    return data;
  } catch (err) {
    console.log("err:", err);
  }
};

export const login = async (userData) => {
  try {
    const { data } = await serverApi.post(`/login`, userData);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

export const getUserProfile = async (accessToken) => {
  const { data } = await serverApi.get(`/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const updateProfile = async (formData, accessToken) => {
  const { data } = await serverApi.patch(`/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
