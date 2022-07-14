import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTask, setFinished } from "../../redux/userSlice.js";
import CheckboxTask from "./CheckboxTask.js";
import CounterTask from "./CounterTask.js";
import PartsTask from "./PartsTask.js";
import { BsTrash } from "react-icons/bs";
import { toggleConfetti } from "../../redux/toastSlice.js";
import TimerTask from "./TimerTask.js";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));
    };

    const finishTask = () => {
        dispatch(setFinished(task.id));
        dispatch(toggleConfetti());
    };

    return (
        <>
            <TaskWrapper>
                <TaskName>{task.name}</TaskName>
                <TaskContent>
                    {task.type === "checkbox" && <CheckboxTask task={task} finishTask={finishTask} />}
                    {task.type === "counter" && <CounterTask task={task} finishTask={finishTask} />}
                    {task.type === "parts" && <PartsTask task={task} finishTask={finishTask} />}
                    {task.type === "timer" && <TimerTask task={task} finishTask={finishTask} />}
                </TaskContent>
                <Controls>
                    <button onClick={handleDeleteTask}>
                        <BsTrash />
                    </button>
                </Controls>
            </TaskWrapper>
        </>
    );
};

export default Task;

const TaskWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    align-items: center;
    font-size: 1.4rem;
    box-shadow: ${({ theme }) => theme.shadows.black40};
    padding: 0.5rem;
    height: 4rem;
    border-radius: 4px;
    position: relative;
    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;
const TaskContent = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

const Controls = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.detail};
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        :hover {
            color: ${({ theme }) => theme.colors.accent};
            cursor: pointer;
        }
    }
`;

const TaskName = styled.h4`
    color: ${({ theme }) => theme.colors.detail};
    font-size: 1.4rem;
    vertical-align: middle;
    margin-right: 1rem;
`;
