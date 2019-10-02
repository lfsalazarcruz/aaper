import styled from "styled-components";
import colors from "../../constants/colors";

export const ProductTable = styled.div`
  background-color: lightgray;
`;

export const ProductTableFields = styled.div`
  display: flex;
  margin: 1px 0;
  font-weight: normal;
`;

export const ProductRow = styled.div`
  padding: 8px 0;
  display: flex;
  background-color: ${colors.backgroundColor};
  margin: 1px 0;
  color: ${colors.darker};
`;

export const ProductCellPosition = styled.p`
  width: 70px;
  text-align: center;
  padding: 3px;
  margin: 5px;
  font-size: 14px;
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
`;

export const ProductCellTitle = styled.p`
  padding: 3px 5px;
  margin: 5px 0;
  font-size: 14px;
  text-align: justify;
  font-weight: bold;
`;

export const AmazonLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  background-color: ${colors.accent3};
  color: #fff;
  font-weight: bold;
  width: 70px;
  text-align: center;
  padding: 7px 14px;
  margin: 0 0 5px;
  border-radius: 3px;
  transition: all 0.3s;
  :hover {
    background-color: ${colors.accent3Hover};
  }
`;

export const ProductCellRating = styled.p`
  width: 130px;
  margin: 5px 0;
  text-align: center;
  font-size: 14px;
`;

export const ProductCellReview = styled.p`
  width: 10%;
  margin: 5px 0;
  text-align: right;
  font-size: 14px;
`;

export const ProductCellPrice = styled.p`
  width: 10%;
  margin: 5px 10px;
  text-align: right;
  font-size: 14px;
`;

export const SearchInput = styled.input`
  height: 33px;
  width: 300px;
  border: none;
  padding: 0 10px;
  border-radius: 3px;
  margin: 7px 7px 5px;
  font-size: 12px;
`;

export const ProductCellContainer = styled.p`
  width: 160px;
  display: flex;
  justify-content: center;
  font-size: 13px;
  margin: auto 30px;
  padding: 5px 0;
  @media (max-width: 850px) {
    width: 140px;
  }
  @media (max-width: 500px) {
    width: 120px;
  }
`;

export const ProductCellImage = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 14px;
  margin: 0;
  padding-top: 7px;
  padding-bottom: 3px;
  margin-left: 8px;
  font-weight: normal;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.dark};
  color: ${colors.backgroundColor};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

export const CurrentPosition = styled.p`
  margin: 0;
  font-weight: bold;
`;
