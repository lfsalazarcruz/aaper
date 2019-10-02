import styled from "styled-components";
import colors from "./constants/colors";

export const SearchbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchInnerContainer = styled.div`
  display: flex;
  background-color: ${colors.darker};
  padding: 5px 10px;
  align-items: center;
`;

export const NavbarTitle = styled.h1`
  font-size: 16px;
  margin: 10px 20px;
  color: ${colors.backgroundColor};
  :hover {
    cursor: pointer;
  }
`;

export const Dropdown = styled.select`
  color: ${colors.backgroundColor};
  font-weight: bold;
  font-size: 12px;
  padding: 0 10px;
  height: 33px;
  width: 160px;
  background-color: ${colors.darker};
  border: 1px solid #cccccc;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
  }
`;
