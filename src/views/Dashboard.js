import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";
import SectionBar from "../components/Dashboard/SectionBar.js";
import TaskList from "../components/Dashboard/TaskList.js";
import LoadingSpinner from "../components/LoadingSpinner.js";
import { setLoading } from "../redux/loadingSlice.js";
import { fetchUserTasks } from "../redux/userSlice.js";

const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState("daily");
    const { user_id } = useSelector(store => store.user);
    const { loading } = useSelector(store => store.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        if (user_id) {
            dispatch(fetchUserTasks(user_id));
        }
        dispatch(setLoading(false));
    }, [dispatch, user_id]);

    if (loading) return <LoadingSpinner />;

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
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.detail};
`;
