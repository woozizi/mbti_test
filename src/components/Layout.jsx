import { useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
