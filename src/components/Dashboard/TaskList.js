import React from "react";
import styled from "styled-components";
import { MdAddTask } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddNewModal from "./NewTask/AddNewModal.js";
import Task from "../Tasks/Task.js";

const TaskList = ({ section }) => {
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const { tasks } = useSelector(store => store.user);

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
                <h3>Current</h3>
                <TaskWrapper>
                    {tasks.length > 0 &&
                        tasks.map(task => {
                            if (task.section === section && task.is_finished === false) return <Task key={`${task.id}-${task.name}`} task={task} />;
                            else return <span key={task.id}></span>;
                        })}
                </TaskWrapper>
                <h3>Finished</h3>
                <TaskWrapper>
                    {tasks.length > 0 &&
                        tasks.map(task => {
                            if (task.section === section && task.is_finished === true) return <Task key={`${task.id}-${task.name}`} task={task} />;
                            else return <span key={task.id}></span>;
                        })}
                </TaskWrapper>
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
    h3 {
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.detail}`};
        margin-top: 1rem;
    }
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
