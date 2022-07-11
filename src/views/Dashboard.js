import React, { useState } from "react";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";
import DailyTaskList from "../components/Dashboard/DailyTaskList.js";
import SectionBar from "../components/Dashboard/SectionBar.js";
import TargetsTaskList from "../components/Dashboard/TargetsTaskList.js";
import TaskList from "../components/Dashboard/TaskList.js";
import TimeBar from "../components/Dashboard/TimeBar.js";

const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState("daily");

    return (
        <BgContainer>
            <DashboardContainer>
                <SectionBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
                {selectedSection === "daily" && <TaskList section="daily" />}
                {selectedSection === "targets" && <TaskList section="targets" />}
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
