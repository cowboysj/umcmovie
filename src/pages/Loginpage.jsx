import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 40%;
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
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  height: 20%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "gray" : " rgba(3, 37, 65, 1)"};
  color: white;
`;
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isButtonEnabled, setButtonEnabled] = useState(false);

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

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
    validateEmail(newValue);
    updateButtonStatus(newValue, password);
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    updateButtonStatus(email, newValue);
  };

  const updateButtonStatus = (email, password) => {
    // 이메일과 비밀번호가 유효한 경우 로그인 버튼 활성화
    setButtonEnabled(emailError === "" && email !== "" && password !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기에서 실제로 로그인 정보를 확인하고 처리해야 합니다.
    // 이 예제에서는 간단하게 콘솔에 출력합니다.
    console.log("로그인 시도:", { email, password });
  };

  return (
    <Div>
      <Header>이메일과 비밀번호를 입력해주세요</Header>
      <form onSubmit={handleSubmit}>
        <Content>
          <Label>
            이메일 주소
            <Input type="email" value={email} onChange={handleEmailChange} />
          </Label>
          <Check>{emailError}</Check>
        </Content>
        <Content>
          <Label>
            비밀번호
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Label>
        </Content>

        <SubmitButton
          type="submit"
          disabled={!isButtonEnabled}
          check={isButtonEnabled}
        >
          확인
        </SubmitButton>
      </form>
    </Div>
  );
};

export default LoginForm;
