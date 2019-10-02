import styled from "styled-components";
import colors from "../../constants/colors";

export const HomeContainer = styled.div`
  color: ${colors.dark};
  background-color: ${colors.backgroundColor};
`;

export const PageTitle = styled.h1`
  margin: 120px 20px 20px;
  text-align: center;
  font-size: 50px;
  color: ${colors.darker};
`;

export const PageSubtitle = styled.h2`
  text-align: center;
  font-size: 45px;
  font-size: 50px;
  color: ${colors.darker};
`;

export const PageInfo = styled.p`
  text-align: center;
  font-size: 40px;
  width: 60%;
  margin: 0 auto;
`;

export const MidContainer = styled.div`
  background: ${colors.accent3};
  background: radial-gradient(
    circle,
    ${colors.accent3} 0%,
    ${colors.accent3Hover} 100%
  );
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselTitle = styled.p`
  margin: 0;
  font-size: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 96%;
  color: ${colors.backgroundColor};
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
  color: ${colors.accent3Hover};
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
  background-color: ${colors.darker};
  color: ${colors.backgroundColor}
  height: 300px;
`;
