import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTask, updateColumn } from "../../redux/userSlice.js";
import CheckboxTask from "./CheckboxTask.js";
import CounterTask from "./CounterTask.js";
import PartsTask from "./PartsTask.js";

const Task = ({ task, index }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));
    };
    const setIsFinished = val => {
        dispatch(updateColumn({ task_id: task.id, column: "is_finished", val }));
    };

    return (
        <TaskWrapper>
            <p>{index + 1}.</p>
            <TaskName>{task.name}</TaskName>
            <TaskContent>
                {task.type === "checkbox" && <CheckboxTask task={task} setIsFinished={setIsFinished} />}
                {task.type === "counter" && <CounterTask task={task} />}
                {task.type === "parts" && <PartsTask task={task} />}
                <Controls>
                    <button>edit</button>
                    <button onClick={handleDeleteTask}>delete</button>
                </Controls>
            </TaskContent>
        </TaskWrapper>
    );
};

export default Task;

const TaskWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    box-shadow: ${({ theme }) => theme.shadows.black40};
    > p {
        padding: 0.25rem 0.5rem;
        color: ${({ theme }) => theme.colors.accent};
        width: 3rem;
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
    padding: 0.5rem 1rem;
    > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.detail};
        padding: 0.25rem 0.5rem;
        font-size: 1.2rem;
    }
`;

const TaskName = styled.h4`
    color: ${({ theme }) => theme.colors.detail};
    font-size: 1.4rem;
    width: 500px;
`;
