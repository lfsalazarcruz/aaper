import styled from "styled-components";
import colors from "../../constants/colors";

export const HomeContainer = styled.div`
  color: #576574;
  background-color: #eef3f7;
  background-color: #ffffff;
`;

export const PageTitle = styled.h1`
  margin: 120px 20px 20px;
  text-align: center;
  font-size: 50px;
`;

export const PageSubtitle = styled.h2`
  text-align: center;
  font-size: 45px;
`;

export const PageInfo = styled.p`
  text-align: center;
  font-size: 40px;
  width: 60%;
  margin: 0 auto;
`;

export const MidContainer = styled.div`
  background-color: ${colors.accent};
  margin-top: 80px;
`;

export const CarouselTitle = styled.p`
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
  font-size: 60px;
  letter-spacing: 2px;
  color: ${colors.buttonHover};
`;

export const CarouselContainer = styled.div`
  padding-bottom: 40px;
  display: flex;
  flexdirection: row;
  width: 100%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.accent};
  transition: all 0.3s;
  :hover {
    text-decoration: line-through;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  background-color: ${colors.darkPrimary};
  height: 300px;
`;
