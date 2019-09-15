import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #576574;
  background-color: #eef3f7;
  @media (max-width: 500px) {
    height: 100%;
  }
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
