import React from "react";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";
import Task from "../components/Tasks/Task.js";

const daily_examples = [
    {
        id: "daily-1",
        name: "Running",
        type: "checkbox",
        is_finished: false,
        value: 0,
        target: 0
    },
    {
        id: "daily-2",
        name: "Push-ups 4x10",
        type: "parts",
        is_finished: false,
        value: 1,
        target: 4
    },
    {
        id: "daily-3",
        name: "Drink 6 cups of water ",
        type: "parts",
        is_finished: false,
        value: 2,
        target: 6
    }
];
const targets_examples = [
    {
        id: "example-4",
        name: "Find job",
        type: "checkbox",
        is_finished: false,
        value: 0,
        target: 0
    },
    {
        id: "example-5",
        name: "cccc ",
        type: "parts",
        is_finished: false,
        value: 2,
        target: 6
    },
    {
        id: "example-6",
        name: "Read 20 books 2022",
        type: "counter",
        step: 1,
        is_finished: false,
        value: 8,
        target: 20
    }
];

const MainPage = () => {
    return (
        <BgContainer>
            <MainPageContainer>
                <SectionHeading>Track your daily routines</SectionHeading>
                <SectionContent>
                    <TaskExamplesWrap>
                        {daily_examples.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                    </TaskExamplesWrap>
                </SectionContent>
                <SectionHeading>Track your targets</SectionHeading>
                <SectionContent>
                    <TaskExamplesWrap>
                        {targets_examples.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                    </TaskExamplesWrap>
                </SectionContent>
            </MainPageContainer>
        </BgContainer>
    );
};

export default MainPage;

const MainPageContainer = styled.main`
    min-height: calc(100vh - 100px);
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.detail};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.black80};
    padding: 1rem;
    border-radius: 8px;
`;

const SectionHeading = styled.h2`
    color: ${({ theme }) => theme.colors.accent};
    padding: 1rem 0;
    margin: 0 -1rem;
    font-size: 2.4rem;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.detail}`};
    text-align: center;
`;
const SectionContent = styled.section`
    pointer-events: none;
`;
const TaskExamplesWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
`;
