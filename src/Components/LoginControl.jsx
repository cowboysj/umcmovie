import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="login-control">
          <button onClick={handleLoginClick}>로그아웃</button>
          <p>환영합니다!</p>
        </div>
      ) : (
        <div className="login-control">
          <button onClick={handleLoginClick}>로그인</button>
          <p>로그인해주세요!</p>
        </div>
      )}
    </div>
  );
}

export default LoginControl;
