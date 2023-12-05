import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import CostNetworkL from "../images/CostNetworkL.png";
import CostNetworkR from "../images/CostNetworkR.png";
import CostOperationalL from "../images/CostOperationalL.jpg";
import CostOperationalR from "../images/CostOperationalR.jpg";
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
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 5%;
  align-self: stretch;
  border-radius: 16px;
  margin-left: 3%;
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
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  align-self: stretch;
  border-radius: 16px;
  margin-right: 3%;
  border: 1px solid rgba(255, 255, 255, 0.5);
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
const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 47.5%;
  border-radius: 16px;
  cursor: pointer;
`;
const Image = styled.div`
  width: 100%;
  height: 60vh;
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
const FullScreenContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  animation: ${(props) => {
      if (props.animationPhase === "out") {
        return props.slidedirection === "up" ? slideOutUp : slideOutDown;
      } else {
        return props.slidedirection === "up" ? slideInUp : slideInDown;
      }
    }}
    0.3s ease-in-out forwards;
`;

function CostCards() {
  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    srcL: CostNetworkL,
    srcR: CostNetworkR,
    title: `Network Cost to Serve and Flow Optimization`,
    description: "",
    linkTo: "https://miebach-returnables.azurewebsites.net",
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
        <FullScreenContainer
          slidedirection={selectedImage.id > previousImage?.id ? "up" : "down"}
          animationPhase={animationPhase}
        >
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
        </FullScreenContainer>
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
            <CardContent>
              <Image
                key={1}
                src={CostNetworkR}
                onClick={() =>
                  selectImage({
                    id: 1,
                    srcL: CostNetworkL,
                    srcR: CostNetworkR,
                    title: `Network Cost to Serve and Flow Optimization`,
                    description: "",
                    linkTo: "https://miebach-returnables.azurewebsites.net",
                  })
                }
                selected={selectedImage?.id === 1}
                hasLink={true}
              ></Image>
              <CardTitle>Network Cost to Serve and Flow Optimization</CardTitle>
            </CardContent>
            <CardContent>
              <Image
                key={2}
                src={CostOperationalR}
                /* onClick={() =>
              selectImage({
                id: 2,
                srcL: CostOperationalL,
                srcR: CostNetworkR,
                title: `Operational Cost to Serve and Flow Optimization`,
                description: "",
              })
            } */
                selected={selectedImage?.id === 2}
                hasLink={false}
              >
                <DisabledOverlay />
              </Image>
              <CardTitle>
                Operational Cost to Serve and Flow Optimization
              </CardTitle>
            </CardContent>
          </ImageContainer>
        </>
      )}
    </CardsContainer>
  );
}

export default withPageTransition(CostCards);
