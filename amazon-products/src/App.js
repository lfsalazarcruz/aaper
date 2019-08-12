import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import products from "./amazonLists/productData-2019-08-11.json";
// import Searchbar from "./components/searchbar/Searchbar";

const ProductRow = styled.div`
  display: flex;
`;

const SearchbarContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      categoryList: []
    };
  }

  selectCategory = e => {
    this.setState({
      selectedCategory: e.target.value,
      categoryList: products[e.target.value]
    });
  };

  render() {
    return (
      <div className="App">
        <SearchbarContainer>
          <select
            name="selectedCategory"
            value={this.state.selectedCategory}
            onChange={this.selectCategory}
          >
            <option value="0">Select category</option>
            {Object.keys(products).map(category => {
              return <option value={category}>{category}</option>;
            })}
          </select>
          <input />
        </SearchbarContainer>
        <div>
          {this.state.categoryList.map(product => {
            return (
              <ProductRow>
                <p>{product.place}</p>
                <p>{product.title}</p>
                <p>{product.rating}</p>
                <p>{product.reviews}</p>
                <p>{product.price}</p>
                {/* <img src={product.image} /> */}
              </ProductRow>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
