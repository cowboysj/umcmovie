import { useLocation, useParams } from "react-router-dom";
import { DOMAIN } from "../Components/Movie";
import styled from "styled-components";

const DetailWrap = styled.div`
  width: 100%;
  background: rgba(18, 18, 18, 0.1);
  height: 90%;
`;
const Wrap = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  font-family: pretendard;
`;

const Poster = styled.img`
  width: 20%;
`;
const DesWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`;
const Title = styled.div`
  font-weight: 600;
  margin: 1%;
  font-size: 30px;
`;
const Vote = styled.div`
  font-weight: 500;
  margin: 1%;
  font-size: 16px;
`;

export default function MovieDetail() {
  //url로 넘겨 받은 title
  const { title } = useParams();

  //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  //이미지, 별점 등의 모든 정보들
  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <DetailWrap>
      <Wrap>
        <Poster src={DOMAIN + state.poster_path} alt="영화포스터" />
        <DesWrap>
          <Title>{title}</Title>
          <Vote>평점 : {state.vote_average}</Vote>
          <div>{state.overview}</div>
        </DesWrap>
      </Wrap>
    </DetailWrap>
  );
}
