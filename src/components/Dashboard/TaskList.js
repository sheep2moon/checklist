import React from "react";
import styled from "styled-components";
import { MdAddTask } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewModal from "./NewTask/AddNewModal.js";
import Task from "../Tasks/Task.js";
import { useEffect } from "react";
import { setLoading } from "../../redux/loadingSlice.js";
import { setUnfinished, updateColumn } from "../../redux/userSlice.js";

const TaskList = ({ section }) => {
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const { tasks } = useSelector(store => store.user);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [unfinishedTasks, setUnfinishedTasks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (tasks.length > 0) {
            const finished = [];
            const unfinished = [];
            tasks.forEach(task => {
                if (task.section === section) {
                    if (task.is_finished === true) finished.push(task);
                    else unfinished.push(task);
                }
            });
            setFinishedTasks(finished);
            setUnfinishedTasks(unfinished);
        }
    }, [tasks, section]);

    useEffect(() => {
        document.addEventListener("keydown", e => {
            if (e.ctrlKey && e.key === "Enter") {
                setIsNewModalOpen(true);
            }
            if (e.key === "Escape") {
                setIsNewModalOpen(false);
            }
        });
    }, []);

    const handleResetFinished = () => {
        dispatch(setLoading(true));
        finishedTasks.forEach(task => {
            dispatch(setUnfinished(task.id));
            if (task.type !== "checkbox") {
                dispatch(updateColumn({ task_id: task.id, column: "value", val: 0 }));
            }
        });

        dispatch(setLoading(false));
    };

    return (
        <>
            {isNewModalOpen && <AddNewModal section={section} setIsNewModalOpen={setIsNewModalOpen} />}
            <TaskContainer>
                <TopBar>
                    <AddNewBtn onClick={() => setIsNewModalOpen(true)}>
                        Add new task
                        <MdAddTask />
                    </AddNewBtn>
                </TopBar>
                <ListBar>
                    <h3>Current</h3>
                </ListBar>
                <TaskWrapper>{unfinishedTasks.length > 0 && unfinishedTasks.map(task => <Task key={`${task.id}-${task.name}`} task={task} />)}</TaskWrapper>
                <ListBar>
                    <h3>Finished</h3>
                    <ResetBtn onClick={handleResetFinished}>reset</ResetBtn>
                </ListBar>
                <TaskWrapper>{finishedTasks.length > 0 && finishedTasks.map(task => <Task key={`${task.id}-${task.name}`} task={task} />)}</TaskWrapper>
            </TaskContainer>
        </>
    );
};

export default TaskList;

const TaskContainer = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        color: ${({ theme }) => theme.colors.accent};
    }
`;
const AddNewBtn = styled.button`
    height: 60px;
    font-size: 1.4rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.detail};
    border: ${({ theme }) => `1px solid ${theme.colors.detail}`};
    border-radius: 0.2rem;
    :hover {
        color: ${({ theme }) => theme.colors.accent};
        cursor: pointer;
    }
    svg {
        font-size: 1.8rem;
        margin-left: 1rem;
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ListBar = styled.div`
    display: flex;
    width: 100%;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.accent}`};
    > h3 {
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.primary};
        padding: 0.25rem;
        border-top-right-radius: 4px;
    }
`;

const ResetBtn = styled.button`
    background: none;
    border: none;
    margin-left: auto;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.accent};
`;
