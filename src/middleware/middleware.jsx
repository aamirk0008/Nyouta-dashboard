import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

const getTokenFromCookies = () => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
  };

const Middleware = ({ children }) => {
  const location = useLocation();
  const token = getTokenFromCookies();

  useEffect(() => {
    if (!token) {
      console.log("you need to login");
      
    }
  }, [location]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};


export default Middleware