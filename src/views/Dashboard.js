import React, { useState } from "react";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";
import TaskList from "../components/Dashboard/TaskList.js";
import TimeBar from "../components/Dashboard/TimeBar.js";

const Dashboard = () => {
    const [pickedTime, setPickedTime] = useState(null);
    return (
        <BgContainer>
            <DashboardContainer>
                <TimeBar pickedTime={pickedTime} setPickedTime={setPickedTime} />
                <TaskList />
            </DashboardContainer>
        </BgContainer>
    );
};

export default Dashboard;

const DashboardContainer = styled.div`
    padding-top: 2rem;
    margin: 0 1rem 0 1rem;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.detail};
`;
