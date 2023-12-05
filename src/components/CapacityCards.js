import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import CapacityControlL from "../images/CapacityControlL.jpg";
import CapacityOperationalL from "../images/CapacityOperationalL.jpg";
import CapacityStrategicL from "../images/CapacityStrategicL.jpg";
import CapacityTacticalL from "../images/CapacityTacticalL.jpg";
import CapacityWarehouseL from "../images/CapacityWarehouseL.jpg";
import CapacityControlR from "../images/CapacityControlR.jpg";
import CapacityOperationalR from "../images/CapacityOperationalR.jpg";
import CapacityStrategicR from "../images/CapacityStrategicR.jpg";
import CapacityTacticalR from "../images/CapacityTacticalR.jpg";
import CapacityWarehouseR from "../images/CapacityWarehouseR.jpg";
import withPageTransition from "../hooks/withPageTransition";

const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: -2vh;
  padding: 1% 1.5% 1% 2%;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  border-radius: 16px;
  z-index: 3;
  ${({ isExpanded }) =>
    isExpanded &&
    `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  `}
`;
const slideInUp = keyframes`
  from {
    transform: translateY(10vh);
    opacity:0;
  }
  to {
    transform: translateY(0);
    opacity:1;
  }
`;
const slideOutDown = keyframes`
  from {
    transform: translateY(0);
    opacity:1;
  }
  to {
    transform: translateY(10vh);
    opacity:0;
  }
`;
const slideOutUp = keyframes`
  from {
    transform: translateY(0);
    opacity:1;
  }
  to {
    transform: translateY(-10vh); 
    opacity:0;
  }
`;
const slideInDown = keyframes`
  from {
    transform: translateY(-10vh);
    opacity:0;
  }
  to {
    transform: translateY(0);
    opacity:1;
  }
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
  margin-right: 3%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #141c1b 60%, rgba(0, 0, 0, 0) 100%);
    z-index: 2;
  }
  animation: ${(props) => {
      if (props.animationPhase === "out") {
        return props.slidedirection === "up" ? slideOutUp : slideOutDown;
      } else {
        return props.slidedirection === "up" ? slideInUp : slideInDown;
      }
    }}
    0.3s ease-in-out forwards;
  ${({ isExpanded }) =>
    isExpanded &&
    `
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
  `}
`;
const Detail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;
const TextOverlay = styled.div`
  position: absolute;
  top: 5%;
  left: 3%;
  bottom: 1%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SelectedTitle = styled.div`
  color: #fff;
  font-size: ${(props) =>
    props.isExpanded ? "calc(24px + 20%)" : "calc(20px + 20%)"};
  font-style: normal;
  font-weight: 600;
  max-height: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SelectedDescription = styled.div`
  color: #fff;
  width: 75%;
  font-size: ${(props) =>
    props.isExpanded ? "calc(18px + 10%)" : "calc(14px + 10%)"};
  font-style: normal;
  font-weight: ${(props) => (props.isExpanded ? "400" : "300")};
  margin-top: 1%;
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const DemoButton = styled(Link)`
  display: flex;
  width: 25%;
  padding: 1% 2%;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: var(--colours-dark, #141c1b);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: calc(14px + 10%);
  font-style: normal;
  font-weight: 500;
  margin-right: 1%;
`;
const OpenButton = styled.a`
  display: flex;
  width: 25%;
  padding: 1% 2%;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(180deg, #e73f00 44.44%, #e70053 100%);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: calc(14px + 10%);
  font-style: normal;
  font-weight: 500;
  margin-left: 1%;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 60vh;
  border-radius: 16px;
  margin-left: 3%;
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
  font-size: calc(14px + 10%);
  font-style: normal;
  font-weight: 700;
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
  font-size: calc(14px + 10%);
  font-style: normal;
  font-weight: 700;
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
const WarehouseImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 4;
  &:hover {
    border: ${(props) =>
      props.hasLink
        ? "1px solid #9f2733"
        : "1px solid rgba(255, 255, 255, 0.5)"};
  }
  background: radial-gradient(
      142.52% 126.57% at 2.83% 3.89%,
      rgba(20, 28, 27, 0) 0%,
      #141c1b 60%
    ),
    url(${(props) => props.src}), lightgray 50% / cover no-repeat;
  background-size: fill;
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
const Image = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 4;
  &:hover {
    border: ${(props) =>
      props.hasLink
        ? "1px solid #9f2733"
        : "1px solid rgba(255, 255, 255, 0.5)"};
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
  padding: 1% 2%;
  color: #fff;
  text-align: center;
  font-size: calc(14px + 10%);
  font-style: normal;
  font-weight: 700;
  z-index: 5;
`;
const DisabledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 5;
`;
const ExpandIcon = styled.span`
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
  z-index: 10;
  font-size: calc(20px + 10%);
  color: #fff;
  background-color: black;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CapacityCards() {
  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    srcL: CapacityStrategicL,
    srcR: CapacityStrategicR,
    title: `Capacity Planner`,
    description: `As your business grows and introduces new products with varying complexities and storage needs, our Capacity Planner Tool becomes indispensable for optimizing your warehouse within these constraints. Seamlessly integrating data from multiple sources, it comprehensively addresses capacity and storage constraints, offering global accessibility for informed and strategic decision-making. Equip yourself for the future with precision.`,
    linkTo: "https://miebach-capacity-tool.azurewebsites.net",
  });
  const [previousImage, setPreviousImage] = useState(null);
  const [animationPhase, setAnimationPhase] = useState("in");
  const [isExpanded, setIsExpanded] = useState(false);

  const selectImage = (image) => {
    if (selectedImage.id !== image.id) {
      setAnimationPhase("out");
      setPreviousImage(selectedImage);
      setSelectedImage(image);

      setTimeout(() => {
        setAnimationPhase("in");
      }, 300);
    }
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardsContainer isExpanded={isExpanded}>
      {isExpanded && (
        <DetailContainer>
          <Detail>
            <img src={selectedImage.srcL} alt="selected card"></img>
            <ExpandIcon onClick={toggleExpand}>
              <i class="bi bi-fullscreen-exit"></i>
            </ExpandIcon>
            <TextOverlay>
              <SelectedTitle isExpanded={isExpanded}>
                {selectedImage.title}
                <SelectedDescription isExpanded={isExpanded}>
                  {selectedImage.description}
                </SelectedDescription>
              </SelectedTitle>
              <ButtonGroup>
                <DemoButton>See Details</DemoButton>
                <OpenButton
                  href={selectedImage.linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </OpenButton>
              </ButtonGroup>
            </TextOverlay>
          </Detail>
        </DetailContainer>
      )}
      {!isExpanded && (
        <>
          {previousImage && animationPhase === "out" && (
            <DetailContainer
              slidedirection={
                previousImage.id > selectedImage.id ? "down" : "up"
              }
              animationPhase={animationPhase}
            >
              <Detail>
                <img src={previousImage.srcL} alt="selected card"></img>
                <TextOverlay>
                  <SelectedTitle>
                    {previousImage.title}
                    <SelectedDescription>
                      {previousImage.description}
                    </SelectedDescription>
                  </SelectedTitle>
                  <ButtonGroup>
                    <DemoButton>See Details</DemoButton>
                    <OpenButton
                      href={previousImage.linkTo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open
                    </OpenButton>
                  </ButtonGroup>
                </TextOverlay>
              </Detail>
            </DetailContainer>
          )}
          {selectedImage && animationPhase === "in" && (
            <DetailContainer
              slidedirection={
                selectedImage.id > previousImage?.id ? "up" : "down"
              }
              animationPhase={animationPhase}
            >
              <Detail>
                <img src={selectedImage.srcL} alt="selected card"></img>
                <ExpandIcon onClick={toggleExpand}>
                  <i class="bi bi-fullscreen"></i>
                </ExpandIcon>
                <TextOverlay>
                  <SelectedTitle>
                    {selectedImage.title}
                    <SelectedDescription>
                      {selectedImage.description}
                    </SelectedDescription>
                  </SelectedTitle>
                  <ButtonGroup>
                    <DemoButton>See Details</DemoButton>
                    <OpenButton
                      href={selectedImage.linkTo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open
                    </OpenButton>
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
                      src={CapacityStrategicR}
                      onClick={() =>
                        selectImage({
                          id: 1,
                          srcL: CapacityStrategicL,
                          srcR: CapacityStrategicR,
                          title: `Capacity Planner`,
                          description: `As your business grows and introduces new products with varying complexities and storage needs, our Capacity Planner Tool becomes indispensable for optimizing your warehouse within these constraints. Seamlessly integrating data from multiple sources, it comprehensively addresses capacity and storage constraints, offering global accessibility for informed and strategic decision-making. Equip yourself for the future with precision.`,
                          linkTo:
                            "https://miebach-capacity-tool.azurewebsites.net",
                        })
                      }
                      selected={selectedImage?.id === 1}
                      hasLink={true}
                    ></Image>
                    <CardTitle>Capacity Planner</CardTitle>
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
                            src={CapacityTacticalR}
                            onClick={() =>
                              selectImage({
                                id: 2,
                                srcL: CapacityTacticalL,
                                srcR: CapacityTacticalR,
                                title: `Seasonal DC Planner`,
                                description: `A tactical planning tool facilitates visibility, foresight, and capacity planning capabilities. It allows for dynamic system configuration updates, improves master data management, and offers support for routing, housekeeping and returns activities to ensure accurate and efficient planning and operations management.`,
                                linkTo:
                                  "https://routing-tool-miebach.azurewebsites.net",
                              })
                            }
                            selected={selectedImage?.id === 2}
                            hasLink={true}
                          ></Image>
                          <CardTitle>Seasonal DC Planner</CardTitle>
                        </CardContent>
                      </TacticalDiv>
                    </TacticalBox>
                    <OperationalBox>
                      <EmptyDiv></EmptyDiv>
                      <OperationalDiv>
                        <CardContent>
                          <Image
                            key={3}
                            src={CapacityOperationalR}
                            /* onClick={() =>
                          selectImage({
                            id: 3,
                            srcL: CapacityOperationalL,
                            srcR: CapacityOperationalR,
                            title: `Operational Planning`,
                            description: "",
                          })
                        } */
                            selected={selectedImage?.id === 3}
                            hasLink={false}
                          >
                            <DisabledOverlay />
                          </Image>
                          <CardTitle>Operational Planning</CardTitle>
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
                          src={CapacityWarehouseR}
                          onClick={() =>
                            selectImage({
                              id: 4,
                              srcL: CapacityWarehouseL,
                              srcR: CapacityWarehouseR,
                              title: `Logistic Facility Designer`,
                              description: `A warehouse design tool helps fast-growing companies to build facility profiles - operational areas, sizing, storage technology, material handling equipment, investments and costs, with 50 years of Miebach know-how in facility design. Client can use this customizable and configurable app to assess different design alternatives in a self-service, agile and scalable manner.`,
                              linkTo:
                                "https://warehouse-conceptual-design.azurewebsites.net",
                            })
                          }
                          selected={selectedImage?.id === 4}
                          hasLink={true}
                        ></WarehouseImage>
                        <CardTitle>Logistic Facility Designer</CardTitle>
                      </CardContent>
                    </WarehouseDiv>
                  </SubRightBottom>
                </RightTop>
              </FirstRow>
              <SecondRow>
                <CardContent>
                  <Image
                    key={5}
                    src={CapacityControlR}
                    /* onClick={() =>
                  selectImage({
                    id: 5,
                    srcL: CapacityControlL,
                    srcR: CapacityControlR,
                    title: `Control Tower`,
                    description: "",
                  })
                } */
                    selected={selectedImage?.id === 5}
                    hasLink={false}
                  >
                    <DisabledOverlay />
                  </Image>
                  <CardTitle>Control Tower</CardTitle>
                </CardContent>
              </SecondRow>
            </RowBox>
          </ImageContainer>
        </>
      )}
    </CardsContainer>
  );
}

export default withPageTransition(CapacityCards);
