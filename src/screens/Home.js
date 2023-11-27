import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import withPageTransition from "../hooks/withPageTransition";

import header from "../images/HeaderBG.png";
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

const Background = styled.div`
  background-color: #141c1b;
  border: 1px black solid;
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
const MyApps = styled.div`
  color: #fff;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  padding-left: 16px;
  z-index: 2;
`;
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

function Home() {
  return (
    <Background>
      <Header>
        <NaviBar>
          <Logo>
            <Miebach>Miebach</Miebach>
            <Digital>Digital</Digital>
          </Logo>
          <TaskBar>
            <Task to="/home" style={{ fontWeight: "650" }}>
              My apps
            </Task>
            <Task
              to="/capacity-management-with-forecast"
              state={{ animation: "slideLeft" }}
            >
              Capacity management with foresight
            </Task>
            <Task to="/power-of-ai" state={{ animation: "slideLeft" }}>
              Power of AI
            </Task>
            <Task
              to="/cost-to-serve-optimization"
              state={{ animation: "slideLeft" }}
            >
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
        <MyApps>My apps</MyApps>
      </Header>
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
            <CardTitle>
              Operational Cost to Serve and Flow Optimization
            </CardTitle>
          </CardContent>
        </Card>
      </CardsContainer>
    </Background>
  );
}

export default Home;
