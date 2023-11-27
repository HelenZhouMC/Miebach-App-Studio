import React from "react";
import styled from "styled-components";
import withPageTransition from "../hooks/withPageTransition";
import CapacityControl from "../images/CapacityControl.jpg";
import CapacityOperational from "../images/CapacityOperational.jpg";
import CapacityStrategic from "../images/CapacityStrategic.jpg";
import CapacityTactical from "../images/CapacityTactical.jpg";
import CapacityWarehouse from "../images/CapacityWarehouse.jpg";
import PowerDemand from "../images/PowerDemand.jpg";
import PowerPredictive from "../images/PowerPredictive.jpg";
import PowerRoot from "../images/PowerRoot.jpg";
import CostNetwork from "../images/CostNetwork.jpg";
import CostOperational from "../images/CostOperational.jpg";

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: -50px;
  padding: 16px 22px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  border-radius: 16px;
`;

const Card = styled.div`
  display: flex;
  width: calc(25% - 16px);
  padding-top: calc(25% - 16px);
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  z-index: 3;
`;
const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 1;
  }
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
`;

function HomeCards() {
  return (
    <CardsContainer>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CapacityStrategic} />
          {/* <img src={CapacityStrategic} alt="Strategic capacity management" /> */}
          <CardTitle>Strategic capacity management</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CapacityTactical} />
          {/* <img src={CapacityTactical} alt="Tactical capacity planning" /> */}
          <CardTitle>Tactical capacity planning</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CapacityOperational} />
          {/* <img src={CapacityOperational} alt="Operational planning" /> */}
          <CardTitle>Operational planning</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CapacityWarehouse} />
          {/* <img src={CapacityWarehouse} alt="Warehouse Conceptual Design" /> */}
          <CardTitle>Warehouse Conceptual Design</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CapacityControl} />
          {/* <img src={CapacityControl} alt="Control tower" /> */}
          <CardTitle>Control tower</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={PowerDemand} />
          {/* <img src={PowerDemand} alt="Demand forecast" /> */}
          <CardTitle>Demand forecast</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={PowerPredictive} />
          {/* <img
              src={PowerPredictive}
              alt="Predictive data models"
              width="300%"
              height="100%"
            /> */}
          <CardTitle>Predictive data models</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={PowerRoot} />
          {/* <img src={PowerRoot} alt="Root cause detector" /> */}
          <CardTitle>Root cause detector</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CostNetwork} />
          {/* <img
              src={CostNetwork}
              alt="Network Cost to Serve and Flow Optimization"
            /> */}
          <CardTitle>Network Cost to Serve and Flow Optimization</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardsBG imgUrl={CostOperational} />
          {/* <img
              src={CostOperational}
              alt="Operational Cost to Serve and Flow Optimization"
            /> */}
          <CardTitle>Operational Cost to Serve and Flow Optimization</CardTitle>
        </CardContent>
      </Card>
    </CardsContainer>
  );
}

export default withPageTransition(HomeCards);
