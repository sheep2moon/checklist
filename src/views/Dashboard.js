import React from "react";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";
import TimeBar from "../components/Dashboard/TimeBar.js";

const Dashboard = () => {
  return (
    <BgContainer>
      <DashboardContainer>
        <TimeBar />
      </DashboardContainer>
    </BgContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.detail};
`;
