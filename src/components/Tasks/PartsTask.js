import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateColumn } from "../../redux/userSlice.js";
import { AddButton, SubButton } from "../Inputs/CounterButtons.js";

const PartsTask = ({ task }) => {
    const [busy, setBusy] = useState(false);
    const dispatch = useDispatch();

    console.log(task);

    const handleProgressUp = () => {
        if (!busy && task.progress < task.value) {
            setBusy(true);
            if (task.progress + 1 === task.value) {
                dispatch(updateColumn({ task_id: task.id, column: "is_finished", val: true }));
            }
            dispatch(updateColumn({ task_id: task.id, column: "progress", val: task.progress + 1 }));
        }
        setBusy(false);
    };
    const handleProgressDown = () => {
        if (!busy && task.progress > 0) {
            setBusy(true);
            if (task.is_finished) {
                dispatch(updateColumn({ task_id: task.id, column: "is_finished", val: false }));
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
    width: 300px;
    display: grid;
    grid-template-columns: ${({ grid }) => `repeat(${grid + 2},1fr)`};
    gap: 4px;
    height: 2rem;
`;

const ProgressSlice = styled.div`
    width: 100%;
    background-color: ${({ theme, isDone }) => (isDone ? theme.colors.detail : theme.colors.secondary)};
    border-radius: 4px;
`;
