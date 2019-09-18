import React from "react";
import {
  HomeContainer,
  PageTitle,
  PageSubtitle,
  PageInfo,
  CarouselContainer
} from "./HomeStyles";
import ProductCard from "../ProductCard";

const Home = props => {
  return (
    <HomeContainer>
      <PageTitle>Welcome to Amazon Scrapy!</PageTitle>
      <PageSubtitle>Amazon Best Sellers</PageSubtitle>
      <PageInfo>
        Hourly updates of Amazon's most popular products based on sales.
      </PageInfo>
      <CarouselContainer>
        {props.escalated.map(product => {
          return (
            <ProductCard
              place={product.place}
              title={product.title}
              image={product.image}
              rating={product.rating}
              counter={product.counter}
              category={product.category}
              url={product.url}
            />
          );
        })}
      </CarouselContainer>
    </HomeContainer>
  );
};

export default Home;
