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
                    <Controls>
                        <button onClick={handleDeleteTask}>
                            <BsTrash />
                        </button>
                    </Controls>
                </TaskContent>
            </TaskWrapper>
        </>
    );
};

export default Task;

const TaskWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    box-shadow: ${({ theme }) => theme.shadows.black40};
    height: 4rem;
`;
const TaskContent = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

const Controls = styled.div`
    padding: 0.5rem 1rem;
    > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.detail};
        padding: 0.25rem 0.5rem;
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
    width: 500px;
    margin-left: 0.5rem;
`;
