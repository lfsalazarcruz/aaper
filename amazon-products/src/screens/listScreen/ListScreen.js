import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
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
} from "./ListScreenStyles";

const ListScreen = props => {
  const arrowDirection = number => {
    if (number > 0) {
      return (
        <FontAwesomeIcon icon={faChevronUp} style={{ fontWeight: "bold" }} />
      );
    } else if (number < 0) {
      return (
        <FontAwesomeIcon icon={faChevronDown} style={{ fontWeight: "bold" }} />
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
    <>
      <FieldContainer>
        <SearchContainer>
          <CategoryTitle>Category: {props.categorySelected}</CategoryTitle>
          <CategoryTitle>Last Update: {props.updatedDate}</CategoryTitle>
          <SearchInput
            type="text"
            name="searchTerm"
            // onChange={this.filterList}
            placeholder="Search item..."
          />
        </SearchContainer>
        <ProductTableFields>
          <ProductCellPosition>Position</ProductCellPosition>
          <ProductCellTitle
            style={{
              textAlign: "center",
              width: "40%"
            }}
          >
            Product
          </ProductCellTitle>
          <ProductCellContainer />
          <ProductCellRating>Rating</ProductCellRating>
          <ProductCellReview>Reviews</ProductCellReview>
          <ProductCellPrice>Price</ProductCellPrice>
        </ProductTableFields>
      </FieldContainer>
      <ProductTable>
        {props.filteredData.map((product, index) => {
          return (
            <ProductRow id={product.place} key={product.place}>
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
    </>
  );
};

export default ListScreen;
