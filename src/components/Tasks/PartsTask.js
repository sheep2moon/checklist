import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUnfinished, updateColumn } from "../../redux/userSlice.js";
import { AddButton, SubButton } from "../Inputs/CounterButtons.js";

const PartsTask = ({ task, finishTask }) => {
    const [busy, setBusy] = useState(false);
    const dispatch = useDispatch();
    const handleProgressUp = () => {
        if (!busy && task.value < task.target) {
            setBusy(true);
            if (task.value + 1 === task.target) {
                finishTask();
            }
            dispatch(updateColumn({ task_id: task.id, column: "value", val: task.value + 1 }));
        }
        setBusy(false);
    };
    const handleProgressDown = () => {
        if (!busy && task.value > 0) {
            setBusy(true);
            if (task.is_finished) {
                dispatch(setUnfinished(task.id));
            }
            dispatch(updateColumn({ task_id: task.id, column: "value", val: task.value - 1 }));
        }

        setBusy(false);
    };

    return (
        <PartsTaskContainer>
            <SubButton onClick={handleProgressDown} />
            {[...Array(task.target).keys()].map((slice, index) => (
                <ProgressSlice key={index} isDone={task.value > index} />
            ))}
            <AddButton onClick={handleProgressUp} />
        </PartsTaskContainer>
    );
};

export default PartsTask;

const PartsTaskContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    height: 2rem;
`;

const ProgressSlice = styled.div`
    width: 24px;
    height: 100%;
    background-color: ${({ theme, isDone }) => (isDone ? theme.colors.detail : theme.colors.secondary)};
    border-radius: 4px;
`;
