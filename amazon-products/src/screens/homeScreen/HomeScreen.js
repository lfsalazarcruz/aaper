import React from "react";
import {
  HomeContainer,
  PageTitle,
  PageSubtitle,
  PageInfo,
  MidContainer,
  CarouselTitle,
  CarouselContainer,
  Footer,
  Link
} from "./HomeStyles";
import ProductCard from "../../components/ProductCard";

const HomeScreen = props => {
  return (
    <HomeContainer>
      <PageTitle>Welcome to Amazon Scrapy!</PageTitle>
      <PageSubtitle>Amazon Best Sellers</PageSubtitle>
      <PageInfo>
        Hourly updates of Amazon's most popular products based on sales.
      </PageInfo>
      <MidContainer>
        <CarouselTitle>Trending this hour...</CarouselTitle>
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
      </MidContainer>
      <Footer>
        <PageInfo style={{ margin: 0, width: "auto", marginRight: "20px" }}>
          For more info, email me{" "}
          <Link
            href="mailto:amazonscrapyapp@gmail.com"
            class="contact-link"
            target="_blank"
          >
            here
          </Link>
          .
        </PageInfo>
      </Footer>
    </HomeContainer>
  );
};

export default HomeScreen;
