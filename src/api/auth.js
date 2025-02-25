import { serverApi } from "./axios";

//회원가입
export const register = async (userData) => {
  try {
    const { data } = await serverApi.post(`/register`, userData);
    return data;
  } catch (err) {
    if (err.response && err.response.status === 409) {
      throw new Error("이미 등록된 아이디입니다.");
    }
    if (err.response && err.response.status === 401) {
      throw new Error("이미 등록된 아이디입니다.");
    }

    throw err;
  }
};

//로그인
export const login = async (userData) => {
  try {
    const { data } = await serverApi.post(`/login`, userData);
    return data;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      throw new Error("비밀번호가 틀렸거나, 등록되지 않은 아이디입니다.");
    }
    throw err;
  }
};

//유저정보 가져오기
export const getUserProfile = async (accessToken) => {
  const { data } = await serverApi.get(`/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

//유저 정보 업데이트
export const updateProfile = async (updatedNickname, accessToken) => {
  const { data } = await serverApi.patch(`/profile`, updatedNickname, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
