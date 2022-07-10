import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TypeSelect = ({ taskType, setTaskType, taskValue, setTaskValue, taskStep, setTaskStep }) => {
    const handleStepChange = e => {
        setTaskStep(e.target.value);
    };

    return (
        <TypeContainer>
            <p>Select type of task</p>
            <TypeWrap>
                <TypeOption onClick={() => setTaskType("checkbox")} isActive={taskType === "checkbox"}>
                    Checkbox
                </TypeOption>
                <TypeOption onClick={() => setTaskType("counter")} isActive={taskType === "counter"}>
                    Counter
                </TypeOption>
                <TypeOption onClick={() => setTaskType("parts")} isActive={taskType === "parts"}>
                    Parts
                </TypeOption>
            </TypeWrap>
            <TypeDetails>
                {taskType === "parts" && (
                    <PartsInputWrap>
                        <span onClick={() => setTaskValue(taskValue - 1)}>-</span>
                        <span>{taskValue}</span>
                        <span onClick={() => setTaskValue(taskValue + 1)}>+</span>
                    </PartsInputWrap>
                )}
                {taskType === "counter" && (
                    <PartsInputWrap>
                        <p>step</p>
                        <input type="number" value={taskStep} size={420} onChange={handleStepChange} />
                    </PartsInputWrap>
                )}
            </TypeDetails>
        </TypeContainer>
    );
};

export default TypeSelect;

const TypeContainer = styled.div`
    > p {
        padding-bottom: 0.5rem;
    }
`;

const TypeWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TypeDetails = styled.div`
    display: flex;
    justify-content: center;
`;
const PartsInputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    span {
        font-size: 1.4rem;
        border: 1px solid #ffffff20;
        padding: 0.5rem;
        height: 2rem;
        display: flex;
        align-items: center;
    }
    input {
        max-width: 100px;
        height: 2rem;
        border: none;
        background: none;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.detail}`};
        padding: 0.5rem 0;
        text-align: center;
        margin-left: 1rem;
        padding-left: 0.5rem;
        color: ${({ theme }) => theme.colors.detail};
        font-size: 1.2rem;
    }
`;

const TypeOption = styled.button`
    width: 100%;
    height: 2rem;
    background: none;
    color: ${({ theme }) => theme.colors.detail};
    border: ${({ theme }) => `1px solid ${theme.colors.detail}`};
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.secondary : theme.colors.primary)};
`;
