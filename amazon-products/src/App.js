import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";
import Home from "./components/home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
  FieldContainer,
  ProductPositionContainer,
  CurrentPosition
} from "./AppStyles";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

class App extends Component {
  constructor(props) {
    // Initialize Firebase
    firebase.initializeApp(config);
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
    let ref = firebase.database().ref("/");

    ref.once("value", snapshot => {
      const data = snapshot.val();
      let date = new Date(data.data.date);

      this.setState({
        categories: data.data.scrapes,
        dateUdpated: date.toString()
      });
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

  goHome = e => {
    this.setState({
      selectedCategory: "",
      categoryList: [],
      filtered: [],
      searchTerm: ""
    });
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
    const arrowDirection = number => {
      if (number > 0) {
        return (
          <FontAwesomeIcon icon={faChevronUp} style={{ fontWeight: "bold" }} />
        );
      } else if (number < 0) {
        return (
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontWeight: "bold" }}
          />
        );
      } else {
        return null;
      }
    };

    const getFontColor = number => {
      if (number > 0) {
        return "green";
      } else if (number < 0) {
        return "red";
      } else {
        return;
      }
    };

    return (
      <div className="App">
        <SearchbarContainer>
          <SearchInnerContainer>
            <NavbarTitle onClick={this.goHome}>amazon scrapy</NavbarTitle>
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
                <ProductPositionContainer
                  style={{ color: getFontColor(product.counter) }}
                >
                  <ProductCellPosition>{product.place}</ProductCellPosition>
                  {arrowDirection(product.counter)}
                  {product.counter > 0 ? (
                    <CurrentPosition>+{product.counter}</CurrentPosition>
                  ) : product.counter < 0 ? (
                    <CurrentPosition>{product.counter}</CurrentPosition>
                  ) : null}
                </ProductPositionContainer>
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
