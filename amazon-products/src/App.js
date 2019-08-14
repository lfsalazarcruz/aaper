import React, { Component } from "react";
import "./App.css";
import {
  SearchbarContainer,
  NavbarTitle,
  SearchInnerContainer,
  Dropdown,
  SearchInput,
  CategoryTitle,
  ProductTable,
  ProductTableFields,
  ProductCellPosition,
  ProductRow,
  ProductCellTitle,
  ProductCellRating,
  ProductCellReview,
  ProductCellPrice
} from "./AppStyles";

import products20190811 from "./amazonLists/productData-2019-08-11.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      categoryList: [],
      filtered: [],
      searchTerm: "",
      displayItem: false,
      itemSelected: {}
    };
  }

  selectCategory = e => {
    if (e.target.value === "0") {
      this.setState({
        selectCategory: "",
        categoryList: [],
        filtered: [],
        searchTerm: ""
      });
    } else {
      this.setState({
        selectedCategory: e.target.value,
        categoryList: products20190811[e.target.value],
        filtered: products20190811[e.target.value]
      });
    }
  };

  filterList = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.categoryList;
      newList = currentList.filter(i => {
        let lc = i.title.toLowerCase();
        let filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = this.state.categoryList;
    }

    this.setState({
      filtered: newList
    });
  };

  extendProduct = e => {
    let itemPosition = e.currentTarget.getAttribute("id");
    const selectedItem = this.state.filtered.find(
      item => item.place == itemPosition
    );
    this.setState({
      itemSelected: selectedItem,
      displayItem: true
    });

    if (this.state.displayItem) {
      this.setState({
        itemSelected: {},
        displayItem: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchbarContainer>
          <NavbarTitle>amazon best sellers</NavbarTitle>
          <SearchInnerContainer>
            <Dropdown
              name="selectedCategory"
              value={this.state.selectedCategory}
              onChange={this.selectCategory}
            >
              <option value="0">Select category</option>
              {Object.keys(products20190811).map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </Dropdown>
            <SearchInput
              type="text"
              name="searchTerm"
              onChange={this.filterList}
              placeholder="Search items..."
            />
          </SearchInnerContainer>
        </SearchbarContainer>
        <CategoryTitle>Category: {this.state.selectedCategory}</CategoryTitle>
        <ProductTable>
          <ProductTableFields>
            <ProductCellPosition>Pos.</ProductCellPosition>
            <ProductCellTitle style={{ textAlign: "center" }}>
              Product Title
            </ProductCellTitle>
            <ProductCellRating>Rating</ProductCellRating>
            <ProductCellReview>Reviews</ProductCellReview>
            <ProductCellPrice>Price</ProductCellPrice>
          </ProductTableFields>
          {this.state.filtered.map((product, index) => {
            return (
              <ProductRow
                id={product.place}
                key={product.place}
                onClick={this.extendProduct}
              >
                <ProductCellPosition>{product.place}</ProductCellPosition>
                <ProductCellTitle>{product.title}</ProductCellTitle>
                <ProductCellRating>{product.rating}</ProductCellRating>
                <ProductCellReview>{product.reviews}</ProductCellReview>
                <ProductCellPrice>{product.price}</ProductCellPrice>
                {product.place === this.state.itemSelected.place &&
                this.state.displayItem ? (
                  <img src={product.image} />
                ) : null}
              </ProductRow>
            );
          })}
        </ProductTable>
      </div>
    );
  }
}

export default App;
