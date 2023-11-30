import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withPageTransition from "../hooks/withPageTransition";
import CapacityControl from "../images/CapacityControl.jpg";
import CapacityOperational from "../images/CapacityOperational.jpg";
import CapacityStrategic from "../images/CapacityStrategic.jpg";
import CapacityTactical from "../images/CapacityTactical.jpg";
import CapacityWarehouse from "../images/CapacityWarehouse.jpg";
import PowerDemand from "../images/PowerDemand.jpg";
import PowerPredictive from "../images/PowerPredictive.jpg";
import PowerRoot from "../images/PowerRoot.jpg";
import CostNetwork from "../images/CostNetwork.png";
import CostOperational from "../images/CostOperational.jpg";

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: -50px;
  padding: 16px 22px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 4%;
  flex-wrap: wrap;
  border-radius: 16px;
`;
const CardsBG = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
      187.84% 132.62% at 2.83% 3.89%,
      rgba(20, 28, 27, 0) 0%,
      #141c1b 75%
    ),
    url(${(props) => props.imgUrl}), lightgray 50% / cover no-repeat;
  background-size: cover;
  transition: transform 0.3s ease-in-out;
`;
const Card = styled.div`
  display: flex;
  width: calc(25% - 4%);
  padding-top: calc(25% - 4%);
  margin-bottom: 4%;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  z-index: 3;
  &:hover {
    cursor: pointer;
    ${CardsBG} {
      transform: scale(1.2);
    }
  }
`;
const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 1;
  }
`;
const CardTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  z-index: 5;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${(props) => (props.isHovered ? 0 : 1)};
  transform: translateY(${(props) => (props.isHovered ? "-100%" : "0")});
  visibility: ${(props) => (props.isHovered ? "hidden" : "visible")};
`;
const CardDetails = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 20%;
  padding-left: 5%;
  padding-right: 5%;
  text-align: justify;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transform: translateY(${(props) => (props.isHovered ? "0" : "100%")});
  visibility: ${(props) => (props.isHovered ? "visible" : "hidden")};
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transform: translateY(${(props) => (props.isHovered ? "0" : "100%")});
  visibility: ${(props) => (props.isHovered ? "visible" : "hidden")};
`;
const DemoButton = styled(Link)`
  display: flex;
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
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  margin-right: 10px;
`;
const OpenButton = styled(Link)`
  display: flex;
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
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  margin-left: 10px;
`;

function HomeCards() {
  const [hoverStatus, setHoverStatus] = useState({});
  const handleMouseEnter = (cardId) => {
    setHoverStatus({ ...hoverStatus, [cardId]: true });
  };
  const handleMouseLeave = (cardId) => {
    setHoverStatus({ ...hoverStatus, [cardId]: false });
  };

  const cards = [
    {
      id: 1,
      imgUrl: CapacityStrategic,
      title: "Facility Planner",
      description: `
      As your business grows and introduces new products with varying complexities and storage needs, our Capacity Planner Tool becomes indispensable for optimizing your warehouse within these constraints. Seamlessly integrating data from multiple sources, it comprehensively addresses capacity and storage constraints, offering global accessibility for informed and strategic decision-making. Equip yourself for the future with precision.`,
    },
    {
      id: 2,
      imgUrl: CapacityTactical,
      title: "Seasonal DC Planner",
      description:
        "A tactical planning tool facilitates visibility, foresight, and capacity planning capabilities. It allows for dynamic system configuration updates, improves master data management, and offers support for routing, housekeeping and returns activities to ensure accurate and efficient planning and operations management.",
    },
    {
      id: 3,
      imgUrl: CapacityOperational,
      title: "Operational planning",
      description: "PlaceHolder",
    },
    {
      id: 4,
      imgUrl: CapacityWarehouse,
      title: "Logistic Facility Designer",
      description:
        "A warehouse design tool helps fast-growing companies to build facility profiles - operational areas, sizing, storage technology, material handling equipment, investments and costs, with 50 years of Miebach know-how in facility design. Client can use this customizable and configurable app to assess different design alternatives in a self-service, agile and scalable manner.",
    },
    {
      id: 5,
      imgUrl: CapacityControl,
      title: "Control tower",
      description: "PlaceHolder",
    },
    {
      id: 6,
      imgUrl: PowerDemand,
      title: "Forecast Tool",
      description:
        "The Forecast tool enhances forecast accuracy, optimizes inventory, reduces costs, improves service, and enables scenario planning. It accurately predicts returns, avoids inventory imbalances, meets customer demands, and allows for informed decision-making based on various scenarios.",
    },
    {
      id: 7,
      imgUrl: PowerPredictive,
      title: "Predictive data models",
      description: "PlaceHolder",
    },
    {
      id: 8,
      imgUrl: PowerRoot,
      title: "Root cause detector",
      description: "PlaceHolder",
    },
    {
      id: 9,
      imgUrl: CostNetwork,
      title: "Network Cost to Serve and Flow Optimization",
      description: "PlaceHolder",
    },
    {
      id: 10,
      imgUrl: CostOperational,
      title: "Operational Cost to Serve and Flow Optimization",
      description: "PlaceHolder",
    },
  ];

  return (
    <CardsContainer>
      {cards.map((card) => (
        <Card
          key={card.id}
          onMouseEnter={() => handleMouseEnter(card.id)}
          onMouseLeave={() => handleMouseLeave(card.id)}
        >
          <CardContent>
            <CardsBG imgUrl={card.imgUrl} />
            <CardTitle isHovered={hoverStatus[card.id]}>{card.title}</CardTitle>
            <CardDetails>
              <CardDescription isHovered={hoverStatus[card.id]}>
                {card.description}
              </CardDescription>
              <ButtonGroup isHovered={hoverStatus[card.id]}>
                <DemoButton>See Demo</DemoButton>
                <OpenButton>Open</OpenButton>
              </ButtonGroup>
            </CardDetails>
          </CardContent>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default withPageTransition(HomeCards);
