import React, { useState } from "react";
import styled from "styled-components";

const CheckboxTask = ({ task, setIsFinished }) => {
    const [isChecked, setIsChecked] = useState(task.value);

    const handleCheck = () => {
        if (task.is_finished) setIsFinished(false);
        else setIsFinished(true);
    };

    const handleNameChange = () => {
        console.log("NAMECHANGE");

        //TODO
    };

    return (
        <TaskContainer>
            <TaskWrap>
                <Checkbox onClick={handleCheck} isChecked={task.is_finished}>
                    <span />
                </Checkbox>
            </TaskWrap>
        </TaskContainer>
    );
};

export default CheckboxTask;

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
`;
const TaskWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    padding: 0.25rem 0;
`;

const Checkbox = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
    cursor: pointer;
    span {
        display: block;
        transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        width: ${({ isChecked }) => (isChecked ? "20px" : "0")};
        height: ${({ isChecked }) => (isChecked ? "20px" : "0")};
        border-radius: 2px;
        background-color: ${({ theme }) => theme.colors.accent};
    }
`;
