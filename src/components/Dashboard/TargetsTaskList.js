import React from "react";
import styled from "styled-components";
import { MdAddTask } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserTasks } from "../../redux/userSlice.js";
import AddNewModal from "./NewTask/AddNewModal.js";
import Task from "../Tasks/Task.js";

const TargetsTaskList = () => {
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const { user_id, tasks } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user_id) {
            const promise = dispatch(fetchUserTasks(user_id));
            return () => promise.abort();
        }
    }, [dispatch, user_id]);

    return (
        <>
            {isNewModalOpen && <AddNewModal section="targets" setIsNewModalOpen={setIsNewModalOpen} />}
            <TaskContainer>
                <TopBar>
                    <h2>Targets</h2>
                    <AddNewBtn onClick={() => setIsNewModalOpen(true)}>
                        Add new task
                        <MdAddTask />
                    </AddNewBtn>
                </TopBar>
                {tasks.length > 0 &&
                    tasks.map((task, index) => {
                        if (task.section === "targets") return <Task key={`${task.id}-${task.name}`} task={task} index={index} />;
                        else return <span key={task.id}></span>;
                    })}
            </TaskContainer>
        </>
    );
};

export default TargetsTaskList;

const TaskContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
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
