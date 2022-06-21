import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TypeSelect = ({ taskType, setTaskType }) => {
    const [counterStep, setCounterStep] = useState(1);
    const [partsCount, setPartsCount] = useState(1);

    return (
        <TypeContainer>
            <p>Select type of task</p>
            <TypeWrap>
                <TypeOption onClick={() => setTaskType("check")} isActive={taskType === "check"}>
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
                        <span onClick={() => setPartsCount(partsCount - 1)}>-</span>
                        <span>{partsCount}</span>
                        <span onClick={() => setPartsCount(partsCount + 1)}>+</span>
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
    padding: 1rem;
    span {
        font-size: 1.4rem;
        border: 1px solid #ffffff10;
        padding: 0.5rem;
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
