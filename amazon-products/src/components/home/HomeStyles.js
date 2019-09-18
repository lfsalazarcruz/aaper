import styled from "styled-components";
import colors from "../../constants/colors";

export const HomeContainer = styled.div`
  color: #576574;
  background-color: #eef3f7;
`;

export const PageTitle = styled.h1`
  margin: 120px 20px 20px;
  text-align: center;
  font-size: 50px;
  @media (max-width: 500px) {
    margin-top: 50px;
    font-size: 40px;
  }
`;

export const PageSubtitle = styled.h2`
  text-align: center;
  font-size: 45px;
  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

export const PageInfo = styled.p`
  text-align: center;
  font-size: 40px;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 500px) {
    font-size: 30px;
    width: 70%;
  }
`;

export const CarouselContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flexdirection: row;
  width: 100%;
  overflow-x: scroll;
  background-color: #c9f527;
  ::-webkit-scrollbar {
    display: none;
  }
`;
