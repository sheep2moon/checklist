import React from "react";
import styled from "styled-components";
import CheckboxTask from "./CheckboxTask.js";
import NumberTask from "./NumberTask.js";
import { MdAddTask } from "react-icons/md";
import { useState } from "react";
import AddNewModal from "../Tasks/AddNewModal.js";

const tempTasks = [
    {
        name: "run at least 3km",
        type: "checkbox",
        value: false
    },
    {
        name: "read at least 10 page of any book",
        type: "checkbox",
        value: false
    },
    {
        name: "make some pushups",
        type: "number",
        value: 0
    }
];

const DailyTasks = () => {
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    return (
        <>
            {isNewModalOpen && <AddNewModal setIsNewModalOpen={setIsNewModalOpen} />}
            <TaskContainer>
                <TopBar>
                    <h2>DailyTASKS</h2>
                    <AddNewBtn onClick={() => setIsNewModalOpen(true)}>
                        Add new task
                        <MdAddTask />
                    </AddNewBtn>
                </TopBar>
                {tempTasks.map((task, index) => {
                    if (task.type === "checkbox") {
                        return <CheckboxTask key={task.name} index={index} task={task} />;
                    } else if (task.type === "number") {
                        return <NumberTask key={task.name} index={index} task={task} />;
                    }
                    return <p>invalid task type</p>;
                })}
            </TaskContainer>
        </>
    );
};

export default DailyTasks;

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
