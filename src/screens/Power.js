import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import header from "../images/HeaderBG.png";
import PowerDemand from "../images/PowerDemand.jpg";
import PowerPredictive from "../images/PowerPredictive.jpg";
import PowerRoot from "../images/PowerRoot.jpg";

const Background = styled.div`
  background-color: #141c1b;
  min-width: 100vh;
  min-height: 100vh;
  padding: 16px 22px;
`;
const Header = styled.div`
  display: flex;
  height: 168px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  border-radius: 16px;
  background: linear-gradient(
      180deg,
      rgba(20, 28, 27, 0.8) 0%,
      rgba(20, 28, 27, 0) 100%
    ),
    url(${header}), lightgray 50% / cover no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const NaviBar = styled.div`
  display: flex;
  height: 48px;
  padding: 30px 16px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  z-index: 2;
`;
const Logo = styled.div`
  flex-shrink: 0;
  display: flex;
`;
const Miebach = styled.div`
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
const Digital = styled.div`
  color: orange;
  font-weight: 250;
  font-size: 20px;
`;
const TaskBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex: 1 0 0;
`;
const Task = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`;
const LogOut = styled.div`
  display: flex;
  width: 115px;
  justify-content: flex-end;
  align-items: center;
`;
const Title = styled.div`
  color: #fff;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  padding-left: 16px;
  z-index: 2;
`;
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
  width: 30%;
  border-radius: 16px;
  cursor: pointer;
`;
const Image = styled.div`
  height: 60vh;
  width: 100%;
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

function Power() {
  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    src: PowerDemand,
    title: `Demand forecast`,
    description: `The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
  });
  const [slideDirection, setSlideDirection] = useState("up");

  const selectImage = (image) => {
    setSlideDirection(image.id > selectedImage?.id ? "up" : "down");
    setSelectedImage(image);
  };

  return (
    <Background>
      <Header>
        <NaviBar>
          <Logo>
            <Miebach>Miebach</Miebach>
            <Digital>Digital</Digital>
          </Logo>
          <TaskBar>
            <Task to="/home">My apps</Task>
            <Task to="/capacity-management-with-forecast">
              Capacity management with foresight
            </Task>
            <Task to="/power-of-ai" style={{ fontWeight: "650" }}>
              Power of AI
            </Task>
            <Task to="/cost-to-serve-optimization">
              Cost to serve & optimization
            </Task>
          </TaskBar>
          <LogOut>
            <Link to="/login">
              <i
                className="bi bi-box-arrow-right"
                style={{ color: "white" }}
              ></i>
            </Link>
          </LogOut>
        </NaviBar>
        <Title>Power of AI</Title>
      </Header>
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
              src={PowerDemand}
              onClick={() =>
                selectImage({
                  id: 1,
                  src: PowerDemand,
                  title: `Demand forecast`,
                  description: `The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
                })
              }
              selected={selectedImage?.id === 1}
            ></Image>
            <CardTitle>Demand forecast</CardTitle>
          </CardContent>
          <CardContent>
            <Image
              key={2}
              src={PowerPredictive}
              onClick={() =>
                selectImage({
                  id: 2,
                  src: PowerPredictive,
                  title: `Predictive data models`,
                  description: `![No Data, placeholder only]The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
                })
              }
              selected={selectedImage?.id === 2}
            ></Image>
            <CardTitle>Predictive data models</CardTitle>
          </CardContent>
          <CardContent>
            <Image
              key={3}
              src={PowerRoot}
              onClick={() =>
                selectImage({
                  id: 3,
                  src: PowerRoot,
                  title: `Root cause detector`,
                  description: `![No Data, placeholder only]The Demand Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.`,
                })
              }
              selected={selectedImage?.id === 3}
            ></Image>
            <CardTitle>Root cause detector</CardTitle>
          </CardContent>
        </ImageContainer>
      </CardsContainer>
    </Background>
  );
}

export default Power;
