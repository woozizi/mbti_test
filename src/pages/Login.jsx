import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      loginUser(response);

      navigate("/");
    } catch (err) {
      alert(err.message || "로그인에 실패했습니다.");
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 m-8 rounded shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-bold mb-6">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <p className="mt-4">
          계정이 없으신가요?{" "}
          <Link
            to="/signUp"
            className="text-red-500 hover:underline hover:text-black"
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
