import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 m-8 rounded shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-bold mb-6">회원가입</h1>
        <AuthForm mode="signUp" onSubmit={handleSignup} />
        <p className="mt-4">
          이미 계정이 있으신가요?{" "}
          <Link
            to="/login"
            className="text-red-500 hover:underline hover:text-black"
          >
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
