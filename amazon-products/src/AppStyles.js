import styled from "styled-components";

export const ProductTable = styled.div`
  padding: 10px;
`;

export const ProductTableFields = styled.div`
  display: flex;
  background-color: #d4d4f7;
  margin: 1px 0;
  color: #637382;
`;

export const ProductRow = styled.div`
  display: flex;
  background-color: #eaeafa;
  margin: 1px 0;
  color: #637382;
  transition: all 0.1s;
  :hover {
    // background-color: #fcaf1b;
    cursor: pointer;
  }
`;

export const ProductCellPosition = styled.p`
  width: 40px;
  text-align: right;
  padding: 3px;
  margin: 5px 0;
  font-size: 14px;
`;

export const ProductCellTitle = styled.p`
  width: 50%;
  padding: 3px;
  margin: 5px 0;
  font-size: 14px;
`;

export const ProductCellRating = styled.p`
  width: 140px;
  padding: 3px;
  margin: 5px 0;
  text-align: center;
  font-size: 14px;
`;

export const ProductCellReview = styled.p`
  width: 70px;
  padding: 3px;
  margin: 5px 0;
  text-align: right;
  font-size: 14px;
`;

export const ProductCellPrice = styled.p`
  width: 70px;
  padding: 3px;
  margin: 5px 0;
  text-align: right;
  font-size: 14px;
`;

export const SearchbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: #232f3e;
  position: fixed;
  top: 0;
`;

export const SearchInnerContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0 40px;
`;

export const NavbarTitle = styled.h1`
  font-size: 16px;
  margin: 10px 20px;
  color: #ffffff;
`;

export const SearchInput = styled.input`
  height: 33px;
  width: 300px;
  border: none;
  padding: 0 10px;
  border-radius: 3px;
  margin-left: 10px;
  font-size: 12px;
`;

export const Dropdown = styled.select`
  color: #cccccc;
  font-weight: bold;
  font-size: 12px;
  padding: 0 10px;
  height: 33px;
  width: 160px;
  background-color: #232f3e;
  border: 1px solid #cccccc;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
  }
`;

export const CategoryTitle = styled.h1`
  background-color: #7f7fe6;
  color: #ffffff;
  padding: 20px;
  margin: 0;
  margin-top: 55px;
`;
