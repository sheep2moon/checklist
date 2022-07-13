import { intervalToDuration } from "date-fns";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateColumn } from "../../redux/userSlice.js";
import { IoStop } from "react-icons/io5";
import { IoMdPlay } from "react-icons/io";
import { IconButton } from "../Inputs/CounterButtons.js";

const TimerTask = ({ task }) => {
    const [timer, setTimer] = useState(false);
    const [displayTime, setDisplayTime] = useState("");
    const dispatch = useDispatch();

    const toggleTime = () => {
        if (timer) {
            //TIMER STOP
            console.log("timer STOP");
            const now = parseInt(Date.now() / 1000);
            const newValue = task.value + (now - task.time);
            dispatch(updateColumn({ task_id: task.id, column: "time", val: 0 }));
            dispatch(updateColumn({ task_id: task.id, column: "value", val: newValue }));
            setTimer(false);
        } else {
            //TIMER START
            console.log("timer START");
            const val = parseInt(Date.now() / 1000);
            dispatch(updateColumn({ task_id: task.id, column: "time", val }));
            setTimer(true);
        }
    };

    const calcTime = () => {
        const now = parseInt(Date.now() / 1000);
        let totalSeconds = task.value;
        console.log(task.value);
        if (task.time) {
            totalSeconds += now - task.time;
        }
        let time = intervalToDuration({ start: 0, end: totalSeconds * 1000 });
        console.log(time);
        const lz = s => {
            if (s.toString().length === 1) return `0${s}`;
            return s;
        };

        setDisplayTime(`${lz(time.hours)}:${lz(time.minutes)}:${lz(time.seconds)}`);
    };

    useEffect(() => {
        calcTime();
        if (task.time) setTimer(true);
    }, []);

    useEffect(() => {
        console.log(displayTime);
    }, [displayTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer) {
                calcTime();
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [task, timer]);

    return (
        <TimeTaskWrap>
            <Time>{displayTime}</Time>
            <IconButton onClick={toggleTime}>{timer ? <IoStop /> : <IoMdPlay />}</IconButton>
        </TimeTaskWrap>
    );
};

export default TimerTask;

const TimeTaskWrap = styled.div`
    display: flex;
    align-items: center;
`;
const Time = styled.p`
    min-width: 8rem;
`;
