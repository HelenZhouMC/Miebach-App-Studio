import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CostNetwork from "../images/CostNetwork.jpg";
import CostOperational from "../images/CostOperational.jpg";
import withPageTransition from "../hooks/withPageTransition";

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: -50px;
  padding: 16px 48px;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  border-radius: 16px;
  z-index: 3;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 28px;
  align-self: stretch;
  border-radius: 16px;
  margin-left: 30px;
`;

const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  align-self: stretch;
  border-radius: 16px;
  margin-right: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #141c1b 50%, rgba(0, 0, 0, 0) 100%);
    z-index: 2;
  }
`;

const Detail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const TextOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  bottom: 2%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SelectedTitle = styled.div`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;
const SelectedDescription = styled.div`
  color: #fff;
  width: 50%;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  margin-top: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const DemoButton = styled(Link)`
  display: flex;
  height: 30px;
  width: 23%;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: var(--colours-dark, #141c1b);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-right: 10px;
`;
const OpenButton = styled(Link)`
  display: flex;
  height: 30px;
  width: 23%;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(180deg, #e73f00 44.44%, #e70053 100%);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-left: 10px;
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45%;
  border-radius: 16px;
  cursor: pointer;
`;
const Image = styled.div`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 4;
  &:hover {
    border: 1px solid #9f2733;
  }
  background: radial-gradient(
      142.52% 126.57% at 2.83% 3.89%,
      rgba(20, 28, 27, 0) 0%,
      #141c1b 75%
    ),
    url(${(props) => props.src}), lightgray 50% / cover no-repeat;
  background-size: cover;
`;
const CardTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px 8px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  z-index: 5;
`;

function CostCards() {
  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    src: CostNetwork,
    title: `Network Cost to Serve and Flow Optimization`,
    description: `![No Data, placeholder only]The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
  });
  const [slideDirection, setSlideDirection] = useState("up");

  const selectImage = (image) => {
    setSlideDirection(image.id > selectedImage?.id ? "up" : "down");
    setSelectedImage(image);
  };

  return (
    <CardsContainer>
      {selectedImage && (
        <DetailContainer slideDirection={slideDirection}>
          <Detail>
            <img src={selectedImage.src} alt="selected card"></img>
            <TextOverlay>
              <SelectedTitle>
                {selectedImage.title}
                <SelectedDescription>
                  {selectedImage.description}
                </SelectedDescription>
              </SelectedTitle>
              <ButtonGroup>
                <DemoButton>See Demo</DemoButton>
                <OpenButton>Open</OpenButton>
              </ButtonGroup>
            </TextOverlay>
          </Detail>
        </DetailContainer>
      )}
      <ImageContainer>
        <CardContent>
          <Image
            key={1}
            src={CostNetwork}
            onClick={() =>
              selectImage({
                id: 1,
                src: CostNetwork,
                title: `Network Cost to Serve and Flow Optimization`,
                description: `![No Data, placeholder only]The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
              })
            }
            selected={selectedImage?.id === 1}
          ></Image>
          <CardTitle>Network Cost to Serve and Flow Optimization</CardTitle>
        </CardContent>
        <CardContent>
          <Image
            key={2}
            src={CostOperational}
            onClick={() =>
              selectImage({
                id: 2,
                src: CostOperational,
                title: `Operational Cost to Serve and Flow Optimization`,
                description: `![No Data, placeholder only]The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
              })
            }
            selected={selectedImage?.id === 2}
          ></Image>
          <CardTitle>Operational Cost to Serve and Flow Optimization</CardTitle>
        </CardContent>
      </ImageContainer>
    </CardsContainer>
  );
}

export default withPageTransition(CostCards);
