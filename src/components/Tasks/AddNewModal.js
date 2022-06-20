import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../Inputs/TextInput.js";

const AddNewModal = ({ isNewModalOpen, setIsNewModalOpen }) => {
    const [title, setTitle] = useState("");

    return (
        <Backdrop onClick={() => setIsNewModalOpen(false)}>
            <ModalWrap onClick={e => e.stopPropagation()}>
                <TextInput label="Task title" />
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
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;

const ThemeOption = styled.div`
    padding: 1rem;
    display: flex;
    color: ${({ textColor }) => textColor};
    background-color: ${({ bgColor }) => bgColor};
    box-shadow: ${({ theme }) => theme.shadows.black80};
`;
