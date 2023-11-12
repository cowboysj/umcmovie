import { useLocation, useParams } from "react-router-dom";
import { DOMAIN } from "../Components/Movie";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  margin: 2%;
`;

const Poster = styled.img`
  width: 14%;
`;
const Title = styled.div`
  font-weight: 400;
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
    <Wrap>
      <Poster src={DOMAIN + state.poster_path} alt="영화포스터" />
      <Title>{title}</Title>
    </Wrap>
  );
}
