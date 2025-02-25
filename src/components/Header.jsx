import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <header className="bg-white shadow ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-500">
          MBTI <span className="text-xs">test</span>
        </Link>
        <nav className="flex space-x-4">
          {user ? (
            <>
              <Link to="/testPage" className="text-sm hover:text-red-500">
                테스트하기
              </Link>
              <Link to="/profile" className="text-sm hover:text-red-500 ">
                마이페이지
              </Link>

              <Link to="/testResults" className="text-sm hover:text-red-500">
                게시판
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm hover:text-red-500"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-red-500">
              로그인
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
