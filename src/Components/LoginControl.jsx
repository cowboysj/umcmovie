import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";

function LoginControl() {
  /*   const [isLoggedIn, setIsLoggedIn] = useState(false); */
  const navigate = useNavigate();

  const handleLoginClick = () => {
    /*     setIsLoggedIn(!isLoggedIn); */
    navigate("/login");
  };

  //토큰 있으면 사용자 정보 표시
  const userId = useSelector((state) => state.login.userId);
  const Token = useSelector((state) => state.login.token);

  return (
    <div>
      {userId ? (
        <div className="login-control">
          <button>{userId}님</button>
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
