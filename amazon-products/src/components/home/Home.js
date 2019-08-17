import React, { Component } from "react";
import { HomeContainer, PageTitle, PageSubtitle, PageInfo } from "./HomeStyles";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <PageTitle>Welcome to Amazon Scrapy!</PageTitle>
        <PageSubtitle>Amazon Best Sellers</PageSubtitle>
        <PageInfo>
          Daily updates of Amazon's most popular products based on sales.
        </PageInfo>
      </HomeContainer>
    );
  }
}

export default Home;
