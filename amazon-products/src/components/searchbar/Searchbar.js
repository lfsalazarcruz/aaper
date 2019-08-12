import React, { Component } from "react";
import styled from "styled-components";
import products from "../../amazonLists/productData-2019-08-11.json";

const SearchbarContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

class Searchbar extends Component {
  render() {
    return (
      <SearchbarContainer>
        <select>
          {Object.keys(products).map(category => {
            return <option>{category}</option>;
          })}
        </select>
        <form>
          <input />
          <button>search</button>
        </form>
      </SearchbarContainer>
    );
  }
}

export default Searchbar;
