import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.75);
`;

const CardTitle = styled.p`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  height: 70px;
  overflow: hidden;
`;

const EscalatedPositions = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: green;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
`;

const Number = styled.p`
  margin: 0;
  padding: 0;
`;

const InnerContainer = styled.div`
  width: 220px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: bold;
`;

const ProductCard = props => {
  return (
    <CardContainer>
      <InnerContainer>
        <ImageContainer>
          <img
            src={props.image}
            style={{ height: "150px", width: "150px" }}
            alt="Product"
          />
        </ImageContainer>
        <MidContainer>
          <EscalatedPositions>
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ fontWeight: "bold", margin: "0px", padding: "0px" }}
            />
            <Number>+{props.counter}</Number>
          </EscalatedPositions>
          <CardTitle>{props.title}</CardTitle>
        </MidContainer>
        <BottomContainer>
          <Text>{props.category}</Text>
          <Text>{props.place}</Text>
        </BottomContainer>
      </InnerContainer>
    </CardContainer>
  );
};

export default ProductCard;
