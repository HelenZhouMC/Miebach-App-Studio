import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import header from "../images/header.jpg";
import CapacityControl from "../images/CapacityControl.jpg";
import CapacityOperational from "../images/CapacityOperational.jpg";
import CapacityStrategic from "../images/CapacityStrategic.jpg";
import CapacityTactical from "../images/CapacityTactical.jpg";
import CapacityWarehouse from "../images/CapacityWarehouse.jpg";

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
  background: url(${header}) no-repeat;
  background-position: center calc(0% - 500px);
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #781935;
    opacity: 0.5;
    border-radius: 16px;
    z-index: 1;
  }
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
const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  height: 60vh;
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

const ImageContainer = styled.div`
  flex: 1;
  height: 60vh;
  border-radius: 16px;
  margin-left: 30px;
`;
const RowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const FirstRow = styled.div`
  flex: 5;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const LeftTop = styled.div`
  flex: 1;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const RightTop = styled.div`
  flex: 2;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const SubRightTop = styled.div`
  width: 100%;
  flex: 3;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10%;
  flex-direction: row;
`;
const TacticalBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FirstArrow = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  z-index: 5;
`;
const TacticalDiv = styled.div`
  flex: 4;
  height: 100%;
  border-radius: 16px;
`;
const OperationalBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const EmptyDiv = styled.div`
  flex: 1;
  height: 100%;
`;
const OperationalDiv = styled.div`
  flex: 5;
  height: 100%;
  border-radius: 16px;
`;
const SubRightBottom = styled.div`
  width: 100%;
  flex: 2;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
  overflow: hidden;
`;
const SecondArrow = styled.div`
  height: 100%;
  flex: 1;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  z-index: 5;
`;
const WarehouseDiv = styled.div`
  height: 100%;
  flex: 9;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const WarehouseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 4;
  &:hover {
    border: 1px solid #9f2733;
  }
`;
const SecondRow = styled.div`
  flex: 2;
  margin-top: 10%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 4;
  &:hover {
    border: 1px solid #9f2733;
  }
`;
const CardTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  z-index: 5;
  padding: 8px;
`;

function Capacity() {
  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    src: CapacityStrategic,
    title: `Strategic capacity management`,
    description: `As the client's business expands, a
    strategic capacity planning tool
    becomes crucial. It offers visibility
    into future growth impacts and
    helps prepare for challenges such as
    capacity constraints, supply chain
    disruptions, and resource shortages.
    This tool enables proactive
    measures to effectively address
    these challenges.`,
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
            <Task
              to="/capacity-management-with-forecast"
              style={{ fontWeight: "650" }}
            >
              Capacity management with foresight
            </Task>
            <Task to="/power-of-ai">Power of AI</Task>
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
        <Title>Cost to serve & optimization</Title>
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
          <RowBox>
            <FirstRow>
              <LeftTop>
                <CardContent>
                  <Image
                    key={1}
                    src={CapacityStrategic}
                    onClick={() =>
                      selectImage({
                        id: 1,
                        src: CapacityStrategic,
                        title: `Strategic capacity management`,
                        description: `As the client's business expands, a
                  strategic capacity planning tool
                  becomes crucial. It offers visibility
                  into future growth impacts and
                  helps prepare for challenges such as
                  capacity constraints, supply chain
                  disruptions, and resource shortages.
                  This tool enables proactive
                  measures to effectively address
                  these challenges.`,
                      })
                    }
                    selected={selectedImage?.id === 1}
                  ></Image>
                  <CardTitle>Strategic capacity management</CardTitle>
                </CardContent>
              </LeftTop>
              <RightTop>
                <SubRightTop>
                  <TacticalBox>
                    <FirstArrow>{">"}</FirstArrow>
                    <TacticalDiv>
                      <CardContent>
                        <Image
                          key={2}
                          src={CapacityTactical}
                          onClick={() =>
                            selectImage({
                              id: 2,
                              src: CapacityTactical,
                              title: `Tactical capacity planning`,
                              description: `![No Data, placeholder only]As the client's business expands, a
                  strategic capacity planning tool
                  becomes crucial. It offers visibility
                  into future growth impacts and
                  helps prepare for challenges such as
                  capacity constraints, supply chain
                  disruptions, and resource shortages.
                  This tool enables proactive
                  measures to effectively address
                  these challenges.`,
                            })
                          }
                          selected={selectedImage?.id === 2}
                        ></Image>
                        <CardTitle>Tactical capacity planning</CardTitle>
                      </CardContent>
                    </TacticalDiv>
                  </TacticalBox>
                  <OperationalBox>
                    <EmptyDiv></EmptyDiv>
                    <OperationalDiv>
                      <CardContent>
                        <Image
                          key={3}
                          src={CapacityOperational}
                          onClick={() =>
                            selectImage({
                              id: 3,
                              src: CapacityOperational,
                              title: `Operational planning`,
                              description: `![No Data, placeholder only]As the client's business expands, a
                  strategic capacity planning tool
                  becomes crucial. It offers visibility
                  into future growth impacts and
                  helps prepare for challenges such as
                  capacity constraints, supply chain
                  disruptions, and resource shortages.
                  This tool enables proactive
                  measures to effectively address
                  these challenges.`,
                            })
                          }
                          selected={selectedImage?.id === 3}
                        ></Image>
                        <CardTitle>Operational planning</CardTitle>
                      </CardContent>
                    </OperationalDiv>
                  </OperationalBox>
                </SubRightTop>
                <SubRightBottom>
                  <SecondArrow>{">"}</SecondArrow>
                  <WarehouseDiv>
                    <CardContent>
                      <WarehouseImage
                        key={4}
                        src={CapacityWarehouse}
                        onClick={() =>
                          selectImage({
                            id: 4,
                            src: CapacityWarehouse,
                            title: `Warehouse Conceptual Design`,
                            description: `![No Data, placeholder only]As the client's business expands, a
                  strategic capacity planning tool
                  becomes crucial. It offers visibility
                  into future growth impacts and
                  helps prepare for challenges such as
                  capacity constraints, supply chain
                  disruptions, and resource shortages.
                  This tool enables proactive
                  measures to effectively address
                  these challenges.`,
                          })
                        }
                        selected={selectedImage?.id === 4}
                      ></WarehouseImage>
                      <CardTitle>Warehouse Conceptual Design</CardTitle>
                    </CardContent>
                  </WarehouseDiv>
                </SubRightBottom>
              </RightTop>
            </FirstRow>
            <SecondRow>
              <CardContent>
                <Image
                  key={5}
                  src={CapacityControl}
                  onClick={() =>
                    selectImage({
                      id: 5,
                      src: CapacityControl,
                      title: `Control tower`,
                      description: `![No Data, placeholder only]As the client's business expands, a
                  strategic capacity planning tool
                  becomes crucial. It offers visibility
                  into future growth impacts and
                  helps prepare for challenges such as
                  capacity constraints, supply chain
                  disruptions, and resource shortages.
                  This tool enables proactive
                  measures to effectively address
                  these challenges.`,
                    })
                  }
                  selected={selectedImage?.id === 5}
                ></Image>
                <CardTitle>Control tower</CardTitle>
              </CardContent>
            </SecondRow>
          </RowBox>
        </ImageContainer>
      </CardsContainer>
    </Background>
  );
}

export default Capacity;
