import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPw, setToken } from "../redux/loginSlice";
import kakao from "../img/kakao.png";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 45%;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  height: 20%;
  font-size: 30px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
const Input = styled.input`
  display: flex;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 7px;
  font-size: 20px;
  outline: 1.2px solid darkblue;
  margin: 3px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;
const Check = styled.div`
  display: flex;
  height: 20px;
  font-size: 16px;
  color: red;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 15px;
  width: 60%;
  margin: 0 auto;
  border-radius: 20px;
  height: 20%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "gray" : " rgba(3, 37, 65, 1)"};
  color: white;
  margin-bottom: 5px;
`;

const Kakao = styled.img`
  display: flex;
  max-width: 30%;
  margin: 0 auto;
  cursor: pointer;
`;
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwError, setPasswordError] = useState("");
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const dispatch = useDispatch();

  const validateEmail = (value) => {
    // 이메일 유효성 검사 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setEmailError("이메일을 입력하세요.");
    } else if (!emailRegex.test(value)) {
      setEmailError("올바른 이메일 주소를 입력하세요.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    // 비밀번호 규칙 정의: 영문, 숫자, 특수문자 포함 8자 이상
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
    validateEmail(newValue);
    updateButtonStatus(newValue, password);
    dispatch(setId(newValue));
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    validatePassword(newValue);
    updateButtonStatus(email, newValue);
    dispatch(setPw(newValue));
  };

  const updateButtonStatus = (email, password) => {
    // 이메일 및 비밀번호 유효성 검사
    const isEmailValid = emailError === "" && email !== "";
    const isPasswordValid = pwError === "" && password !== "";

    // 로그인 버튼 활성화
    setButtonEnabled(isEmailValid && isPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
  };

  const userId = useSelector((state) => state.login.userId);
  const password10 = useSelector((state) => state.login.pw);

  const PostData = async () => {
    try {
      const endpoint = "http://localhost:3000/user/login";
      const requestBody = {
        id: userId,
        pw: password10,
      };

      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post(endpoint, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // 응답 데이터 확인
      console.log("Post 응답", response);

      localStorage.setItem("token", response.data.result.AccessToken);
      localStorage.setItem("id", response.data.result.userId);
      dispatch(setToken(response.data.result.AccessToken));
    } catch (error) {
      // 오류 처리
      console.error("Error during POST request:", error);
    }
  };

  const token10 = useSelector((state) => state.login.token);

  const handleGet = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user/payload", {
        headers: {
          Authorization: token10,
        },
      });

      console.log("Get 응답 :", response);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const handleButtonClick = () => {
    console.log(userId, password10);
    PostData();
  };

  //카카오 로그인

  const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
  const K_REDIRECT_URI = `http://localhost:3000/oauth`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    console.log(K_REST_API_KEY);
    window.location.href = kakaoURL;
  };

  return (
    <Div>
      <Header>이메일과 비밀번호를 입력해주세요</Header>
      <form onSubmit={handleSubmit}>
        <Content>
          <Label>
            이메일 주소
            <Input
              placeholder="이메일을 입력하세요."
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Label>
          <Check>{emailError}</Check>
        </Content>
        <Content>
          <Label>
            비밀번호
            <Input
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Label>
        </Content>

        <SubmitButton
          type="submit"
          /*  disabled={!isButtonEnabled} */
          check={isButtonEnabled}
          onClick={handleButtonClick}
        >
          확인
        </SubmitButton>
        {/* <SubmitButton onClick={handleGet}>토큰 검증 </SubmitButton> */}
        <Kakao onClick={handleKakaoLogin} src={kakao} />
      </form>
    </Div>
  );
};

export default LoginForm;
