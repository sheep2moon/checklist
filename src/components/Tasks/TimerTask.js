import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddButton, SubButton } from "../Inputs/CounterButtons.js";

const TimerTask = ({ task }) => {
    const [timer, setTimer] = useState(false);
    const dispatch = useDispatch();

    const toggleTime = () => {};

    useEffect(() => {
        const t = new Date().toISOString();
        console.log(t);
    }, []);

    return (
        <TimeTaskWrap>
            <StartStop>start</StartStop>
        </TimeTaskWrap>
    );
};

export default TimerTask;

const TimeTaskWrap = styled.div`
    display: flex;
`;
const StartStop = styled.button``;
