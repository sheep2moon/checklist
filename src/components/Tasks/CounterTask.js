import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUnfinished, updateColumn } from "../../redux/userSlice.js";
import { AddButton, SubButton } from "../Inputs/CounterButtons.js";

const CounterTask = ({ task, finishTask }) => {
    const dispatch = useDispatch();

    const countUp = () => {
        const val = task.value + task.step;
        dispatch(updateColumn({ task_id: task.id, column: "value", val }));
        if (val >= task.target) {
            finishTask();
        }
    };
    const countDown = () => {
        const val = task.value - task.step;
        dispatch(updateColumn({ task_id: task.id, column: "value", val }));
        if (val < task.target) {
            dispatch(setUnfinished(task.id));
        }
    };

    return (
        <CounterTaskWrap>
            <CounterWrap>
                <SubButton onClick={countDown} />
                <p>{task.step % 1 === 0 ? task.value : task.value.toFixed(2)}</p>
                <AddButton onClick={countUp} />
            </CounterWrap>
            <ProgressBar>
                <Progress width={task.value / task.target > 1 ? 100 : (task.value / task.target) * 100} />
            </ProgressBar>
        </CounterTaskWrap>
    );
};

export default CounterTask;

const CounterTaskWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const CounterWrap = styled.div`
    display: flex;
    align-items: center;
    > p {
        text-align: center;
        font-size: 1.2rem;
        min-width: 2.4rem;
        padding: 0 0.5rem;
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 2px;
    margin-top: 4px;
    margin-bottom: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;
const Progress = styled.div`
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    width: ${({ width }) => `${width}% `};
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
