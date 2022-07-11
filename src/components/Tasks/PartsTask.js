import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setUnfinished, updateColumn } from "../../redux/userSlice.js";
import { AddButton, SubButton } from "../Inputs/CounterButtons.js";

const PartsTask = ({ task, finishTask }) => {
    const [busy, setBusy] = useState(false);
    const dispatch = useDispatch();
    const handleProgressUp = () => {
        if (!busy && task.progress < task.value) {
            setBusy(true);
            if (task.progress + 1 === task.value) {
                finishTask();
            }
            dispatch(updateColumn({ task_id: task.id, column: "progress", val: task.progress + 1 }));
        }
        setBusy(false);
    };
    const handleProgressDown = () => {
        if (!busy && task.progress > 0) {
            setBusy(true);
            if (task.is_finished) {
                dispatch(setUnfinished(task.id));
            }
            dispatch(updateColumn({ task_id: task.id, column: "progress", val: task.progress - 1 }));
        }

        setBusy(false);
    };

    return (
        <PartsTaskContainer grid={task.value}>
            <SubButton onClick={handleProgressDown} />
            {[...Array(task.value).keys()].map((slice, index) => (
                <ProgressSlice key={index} isDone={task.progress > index} />
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
