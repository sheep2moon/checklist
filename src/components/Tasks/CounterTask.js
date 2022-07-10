import React from "react";
import styled from "styled-components";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { updateColumn } from "../../redux/userSlice.js";

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
                <button onClick={countDown}>
                    <HiMinusSm />
                </button>
                <p>{task.value}</p>
                <button onClick={countUp}>
                    <HiPlusSm />
                </button>
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
    > button {
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
    > p {
        text-align: center;
        font-size: 1.2rem;
        min-width: 2rem;
    }
`;
