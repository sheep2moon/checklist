import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../Inputs/TextInput.js";
import TypeSelect from "./TypeSelect.js";

const AddNewModal = ({ isNewModalOpen, setIsNewModalOpen }) => {
    const [title, setTitle] = useState("");
    const [taskType, setTaskType] = useState("check");
    return (
        <Backdrop onClick={() => setIsNewModalOpen(false)}>
            <ModalWrap onClick={e => e.stopPropagation()}>
                <h2>Add new task</h2>
                <TextInput label="Task title" value={title} setValue={setTitle} />
                <TextInput label="Task description" />

                <TypeSelect taskType={taskType} setTaskType={setTaskType} />
            </ModalWrap>
        </Backdrop>
    );
};

export default AddNewModal;

const Backdrop = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: #00000020;
`;
const ModalWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `2px solid ${theme.colors.darkBlue}`};
    border-radius: 2rem;
    z-index: 0;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h2 {
        color: ${({ theme }) => theme.colors.accent};
        padding-bottom: 1rem;
    }
`;
