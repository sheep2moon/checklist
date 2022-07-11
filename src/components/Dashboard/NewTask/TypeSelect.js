import React from "react";
import styled from "styled-components";

const TypeSelect = ({ taskType, setTaskType, taskValue, setTaskValue, taskStep, setTaskStep }) => {
    const handleStepChange = e => {
        setTaskStep(e.target.value);
    };

    const handlePartsUp = () => {
        if (taskValue < 10) setTaskValue(taskValue + 1);
    };
    const handlePartsDown = () => {
        if (taskValue > 1) setTaskValue(taskValue - 1);
    };

    return (
        <TypeContainer>
            <p>Type of task</p>
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
                    <TypeInputWrap>
                        <button onClick={handlePartsDown}>-</button>
                        <p>{taskValue}</p>
                        <button onClick={handlePartsUp}>+</button>
                    </TypeInputWrap>
                )}
                {taskType === "counter" && (
                    <TypeInputWrap>
                        <p>step</p>
                        <input type="number" value={taskStep} size={420} onChange={handleStepChange} />
                    </TypeInputWrap>
                )}
            </TypeDetails>
        </TypeContainer>
    );
};

export default TypeSelect;

const TypeContainer = styled.div`
    > p {
        padding-bottom: 1rem;
    }
`;

const TypeWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TypeDetails = styled.div`
    display: flex;
    justify-content: center;
    height: 4rem;
`;
const TypeInputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    button {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.detail};
        font-size: 1.4rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
        width: 2.4rem;
        height: 2.4rem;
        transition: all 0.2s ease-in-out;
        border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
        :hover {
            transition: all 0.2s ease-in-out;
            background: ${({ theme }) => theme.colors.primary};
            border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
            color: ${({ theme }) => theme.colors.detail};
            cursor: pointer;
        }
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
    > p {
        text-align: center;
        width: 2rem;
    }
`;

const TypeOption = styled.button`
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    width: 100%;
    height: 2rem;
    background: none;
    color: ${({ theme }) => theme.colors.detail};
    border: ${({ theme }) => `1px solid ${theme.colors.detail}`};
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.secondary : theme.colors.primary)};
`;
