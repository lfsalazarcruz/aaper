import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import axios from "axios";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      categoryList: [],
      filtered: [],
      searchTerm: "",
      displayItem: false,
      itemSelected: {},
      categories: [],
      dateUdpated: ""
    };
  }

  componentDidMount() {
    let URL = "https://amazon-scrappy-backend.herokuapp.com/data";
    // let URL = "http://localhost:8080/data";

    axios
      .get(URL)
      .then(data => {
        // Converting milliseconds to date
        let date = new Date(data.data[data.data.length - 1].date);
        this.setState({
          // Selecting the last item in the database array
          categories: data.data[data.data.length - 1].bestsellers,
          dateUdpated: date.toString()
        });
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
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
        categoryList: this.state.categories[e.target.value],
        filtered: this.state.categories[e.target.value]
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
            <NavbarTitle>amazon scrapy</NavbarTitle>
            <Dropdown
              name="selectedCategory"
              value={this.state.selectedCategory}
              onChange={this.selectCategory}
            >
              <option value="0">Select category</option>
              {Object.keys(this.state.categories).map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </Dropdown>
          </SearchInnerContainer>
          {!this.state.selectedCategory ? <Home /> : null}
          {this.state.selectedCategory ? (
            <FieldContainer>
              <SearchContainer>
                <CategoryTitle>
                  Category: {this.state.selectedCategory}
                </CategoryTitle>
                <CategoryTitle>
                  Last Update: {this.state.dateUdpated}
                </CategoryTitle>
                <SearchInput
                  type="text"
                  name="searchTerm"
                  onChange={this.filterList}
                  placeholder="Search item..."
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
