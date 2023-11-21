import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-top: 3%;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 2%;
`;

const Text = styled.div`
  display: flex;
  font-weight: 500;
  padding-bottom: 1.5%;
`;

const Move = styled.div`
  display: flex;
  color: red;
  cursor: pointer;
`;

export function NotFound() {
  const navigate = useNavigate();
  const handleMoveClick = () => {
    navigate("/");
  };
  return (
    <Wrap>
      <Header>해당 페이지를 찾지 못했습니다.</Header>
      <Text>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</Text>
      <Move onClick={handleMoveClick}>메인 페이지로 이동 </Move>
    </Wrap>
  );
}

export default NotFound;
