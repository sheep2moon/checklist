import React from "react";
import styled from "styled-components";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { updateColumn } from "../../redux/userSlice.js";
import { AddButton, SubButton } from "../Inputs/CounterButtons.js";

const CounterTask = ({ task }) => {
    const dispatch = useDispatch();

    const countUp = () => {
        const val = task.value + task.step;
        dispatch(updateColumn({ task_id: task.id, column: "value", val }));
    };
    const countDown = () => {
        const val = task.value - task.step;
        dispatch(updateColumn({ task_id: task.id, column: "value", val }));
    };

    return (
        <CounterTaskWrap>
            <CounterWrap>
                <SubButton onClick={countDown} />
                <p>{task.value}</p>
                <AddButton onClick={countUp} />
            </CounterWrap>
        </CounterTaskWrap>
    );
};

export default CounterTask;

const CounterTaskWrap = styled.div`
    display: flex;
`;

const CounterWrap = styled.div`
    display: flex;
    align-items: center;
    > p {
        text-align: center;
        font-size: 1.2rem;
        min-width: 2rem;
    }
`;
