import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import header from "../images/HeaderBG.png";
import CostCards from "../components/CostCards";

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

function Cost() {
  return (
    <Background>
      <Header>
        <NaviBar>
          <Logo>
            <Miebach>Miebach</Miebach>
            <Digital>Digital</Digital>
          </Logo>
          <TaskBar>
            <Task to="/home" state={{ animation: "slideRight" }}>
              My apps
            </Task>
            <Task
              to="/capacity-management-with-forecast"
              state={{ animation: "slideRight" }}
            >
              Capacity management with foresight
            </Task>
            <Task to="/power-of-ai" state={{ animation: "slideRight" }}>
              Power of AI
            </Task>
            <Task
              to="/cost-to-serve-optimization"
              style={{ fontWeight: "650" }}
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
        <Title>Cost to serve & optimization</Title>
      </Header>
      <CostCards />
    </Background>
  );
}

export default Cost;
