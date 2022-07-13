import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToast } from "../../../redux/toastSlice.js";
import { supabase } from "../../../supabase/supabaseConfig.js";
import TextInput from "../../Inputs/TextInput.js";
import { StyledButton } from "../../Inputs/StyledButton.js";
import { fetchUserTasks } from "../../../redux/userSlice.js";
import { HiViewBoards } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import TypeInputs from "./TypeInputs.js";

const AddNewModal = ({ section, isNewModalOpen, setIsNewModalOpen }) => {
    const [name, setName] = useState("");
    const [taskType, setTaskType] = useState("checkbox");
    const [taskValue, setTaskValue] = useState(0);
    const [taskStep, setTaskStep] = useState(1);
    const [taskTarget, setTaskTarget] = useState(0);
    const { user_id } = useSelector(store => store.user);

    const dispatch = useDispatch();

    const handleAddTask = async () => {
        if (name.length < 1) {
            dispatch(addToast({ type: "error", message: "enter task name!" }));
            return;
        }

        const newTask = {
            user_id,
            name,
            type: taskType,
            step: taskStep,
            value: taskValue,
            target: taskTarget,
            section
        };

        const { error } = await supabase.from("tasks").insert([newTask]);
        if (error) {
            dispatch(addToast({ type: "error", message: error.message }));
        } else {
            dispatch(addToast({ type: "success", message: "Task Added" }));
            dispatch(fetchUserTasks(user_id));
            setIsNewModalOpen(false);
        }
    };

    const typeInputsProps = {
        taskType,
        taskValue,
        taskStep,
        taskTarget,
        setTaskType,
        setTaskValue,
        setTaskStep,
        setTaskTarget
    };

    const taskTypes = [
        {
            type: "checkbox",
            icon: <AiOutlineCheck />
        },
        {
            type: "parts",
            icon: <HiViewBoards />
        },
        {
            type: "timer",
            icon: <IoTimerOutline />
        },
        {
            type: "counter",
            icon: <MdOutlineSwapVerticalCircle />
        }
    ];

    return (
        <Backdrop onClick={() => setIsNewModalOpen(false)}>
            <ModalWrap onClick={e => e.stopPropagation()}>
                <h2>Add new task</h2>
                <TextInput autoFocus label="Task title" value={name} setValue={setName} />
                <TaskTypesWrap>
                    {taskTypes.map(type => (
                        <TaskCard key={type.type} isSelected={taskType === type.type} onClick={() => setTaskType(type.type)}>
                            <h3>{type.type}</h3>
                            {type.icon}
                        </TaskCard>
                    ))}
                </TaskTypesWrap>
                <TypeInputs {...typeInputsProps} />

                <StyledButton onClick={handleAddTask}>Add</StyledButton>
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
    background-color: #00000040;
`;
const ModalWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `2px solid ${theme.colors.darkBlue}`};
    box-shadow: ${({ theme }) => theme.shadows.black80};
    border-radius: 2rem;
    z-index: 0;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 380px;

    > h2 {
        color: ${({ theme }) => theme.colors.accent};
        padding-bottom: 1rem;
    }
`;

const TaskTypesWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;
const TaskCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.shadows.black80};
    border-radius: 0.25rem;
    outline: ${({ theme, isSelected }) => (isSelected ? `1px solid ${theme.colors.accent}` : "none")};
    > h3 {
    }
`;
