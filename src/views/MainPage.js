import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";
import { StyledButton } from "../components/Inputs/StyledButton.js";
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
        description: "Simple Checkboxes",
        id: "example-4",
        name: "Find job",
        type: "checkbox",
        is_finished: false,
        value: 0,
        target: 0
    },
    {
        description: "Multi step task",
        id: "example-5",
        name: "cccc ",
        type: "parts",
        is_finished: false,
        value: 2,
        target: 6
    },
    {
        description: "Counter with custom step",
        id: "example-6",
        name: "Read 20 books in 2022",
        type: "counter",
        step: 1,
        is_finished: false,
        value: 8,
        target: 20
    },
    {
        description: "Start/Stop timer",
        id: "example-7",
        name: "Running",
        type: "timer",
        step: 1,
        is_finished: false,
        value: 8
    }
];

const MainPage = () => {
    return (
        <BgContainer>
            <MainPageContainer>
                <HeroContainer>
                    <h1>
                        Start tracking your <span>daily routine</span> and <span>goals</span>
                    </h1>
                    <HeroContent>
                        <p>Choose from 4 types of tasks:</p>
                        <ul>
                            {targets_examples.map(task => (
                                <TaskItemWrap key={task.id}>
                                    <p>
                                        <BsDot /> {task.description}
                                    </p>
                                    <Task key={task.id} task={task} />
                                </TaskItemWrap>
                            ))}
                        </ul>
                    </HeroContent>
                    <h2>Create account now</h2>
                    <StyledLink to="/register">Sign Up</StyledLink>
                </HeroContainer>
                {/* <SectionHeading>Track your daily routines</SectionHeading>
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
                <SectionHeading>Choose from 9 unique themes</SectionHeading> */}
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

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        font-size: 2.4rem;
        letter-spacing: 0.25rem;
        padding: 2rem 0;
        > span {
            border-bottom: ${({ theme }) => `1px solid ${theme.colors.detail}`};
        }
    }
`;

const HeroContent = styled.div`
    pointer-events: none;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    > ul {
        padding: 1rem 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    > p {
        font-size: 1.4rem;
    }
`;

const TaskItemWrap = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
    max-width: 800px;
    > div {
        box-shadow: ${({ theme }) => theme.shadows.white40};
    }
    > p {
        width: fit-content;
        background-color: ${({ theme }) => theme.colors.detail};
        color: ${({ theme }) => theme.colors.primary};
        padding: 0.5rem 0.25rem;
        padding-right: 1rem;
        display: flex;
        align-items: center;

        svg {
            font-size: 1.6rem;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.75rem 1.25rem;
    border-radius: 2px;
    margin: 1rem 0;
`;
