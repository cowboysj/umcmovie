import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { BarLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setId, setToken } from "../redux/loginSlice";
import axios from "axios";

const BackgroundWrap = styled.div`
  background: #fefaef;
`;

const Background = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 37.5rem;
  margin: 0px auto;
  flex-direction: column;
  background: #fefaef;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.div`
  height: 10%;
  color: rgba(25, 25, 25, 0.8);
  text-align: center;
  font-family: "Pretendard";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

export function KakaoRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  useEffect(() => {
    fetch(`http://localhost:8000/kakao?code=${code}`, {
      method: "POST", 
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST 응답", data);
        console.log("token", data.result.token);
        dispatch(setId(data.result.name));
        dispatch(setToken(data.result.token));
        navigate("/");
      })

      .catch((error) => {
        console.error("오류 발생", error); 
      });
  }, []);

  return (
    <BackgroundWrap>
      <Background>
        <Text1>Loading</Text1>
        <BarLoader color="rgba(25, 25, 25, 0.8)" />
      </Background>
    </BackgroundWrap>
  );
}
export default KakaoRedirect;
