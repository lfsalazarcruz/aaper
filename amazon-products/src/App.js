import React, { Component } from "react";
import "./App.css";
import {
  SearchbarContainer,
  NavbarTitle,
  SearchInnerContainer,
  Dropdown,
  SearchContainer,
  SearchInput,
  ProductTable,
  ProductTableFields,
  ProductCellPosition,
  ProductRow,
  ProductTitleContainer,
  ProductCellTitle,
  ProductCellRating,
  ProductCellReview,
  ProductCellPrice,
  ProductCellContainer,
  ProductCellImage,
  AmazonLink,
  CategoryTitle,
  FieldContainer
} from "./AppStyles";

import products20190811 from "./amazonLists/productData-2019-08-11.json";
import products20190814 from "./amazonLists/productData-2019-08-14.json";
import products20190815 from "./amazonLists/productData-2019-08-15.json";

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
        selectedCategory: "",
        categoryList: [],
        filtered: [],
        searchTerm: ""
      });
    } else {
      this.setState({
        selectedCategory: e.target.value,
        categoryList: products20190815[e.target.value],
        filtered: products20190815[e.target.value]
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

  render() {
    return (
      <div className="App">
        <SearchbarContainer>
          <SearchInnerContainer>
            <NavbarTitle>amazon best sellers</NavbarTitle>
            <Dropdown
              name="selectedCategory"
              value={this.state.selectedCategory}
              onChange={this.selectCategory}
            >
              <option value="0">Select category</option>
              {Object.keys(products20190815).map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </Dropdown>
          </SearchInnerContainer>
          {this.state.selectedCategory ? (
            <FieldContainer>
              <SearchContainer>
                <CategoryTitle>
                  Category: {this.state.selectedCategory}
                </CategoryTitle>
                <SearchInput
                  type="text"
                  name="searchTerm"
                  onChange={this.filterList}
                  placeholder="Search items..."
                />
              </SearchContainer>
              <ProductTableFields>
                <ProductCellPosition style={{ fontWeight: "bolder" }}>
                  Position
                </ProductCellPosition>
                <ProductCellTitle
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    width: "40%"
                  }}
                >
                  Product
                </ProductCellTitle>
                <ProductCellContainer style={{ fontWeight: "bolder" }} />
                <ProductCellRating style={{ fontWeight: "bolder" }}>
                  Rating
                </ProductCellRating>
                <ProductCellReview style={{ fontWeight: "bolder" }}>
                  Reviews
                </ProductCellReview>
                <ProductCellPrice style={{ fontWeight: "bolder" }}>
                  Price
                </ProductCellPrice>
              </ProductTableFields>
            </FieldContainer>
          ) : null}
        </SearchbarContainer>
        <ProductTable>
          {this.state.filtered.map((product, index) => {
            return (
              <ProductRow
                id={product.place}
                key={product.place}
                onClick={this.extendProduct}
              >
                <ProductCellPosition>{product.place}</ProductCellPosition>
                <ProductTitleContainer>
                  <ProductCellTitle>{product.title}</ProductCellTitle>
                  <AmazonLink
                    href={`https://www.amazon.com${product.url}`}
                    target="_blank"
                  >
                    Buy now
                  </AmazonLink>
                </ProductTitleContainer>
                <ProductCellContainer>
                  <ProductCellImage src={product.image} />
                </ProductCellContainer>
                <ProductCellRating>{product.rating}</ProductCellRating>
                <ProductCellReview>{product.reviews}</ProductCellReview>
                <ProductCellPrice>{product.price}</ProductCellPrice>
              </ProductRow>
            );
          })}
        </ProductTable>
      </div>
    );
  }
}

export default App;
