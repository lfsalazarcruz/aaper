import styled from "styled-components";
import colors from "../../constants/colors";

export const HomeContainer = styled.div`
  color: #576574;
  // background-color: #eef3f7;
  // background-color: #ffffff;
  background-color: #2a373b;
  color: #ffffff;
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
  // background-color: ${colors.accent};
  background: rgb(201,245,39);
  background: radial-gradient(circle, rgba(201,245,39,1) 0%, rgba(175,213,36,1) 100%);
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselTitle = styled.p`
  margin: 0;
  // font-weight: bold;
  font-size: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  // letter-spacing: 2px;
  width: 96%;
  // color: ${colors.buttonHover};
  color: ${colors.primary};
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
  // font-weight: bold;
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
