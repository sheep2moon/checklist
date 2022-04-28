import React, { useState } from "react";
import styled from "styled-components";

const CheckboxTask = ({ task, index }) => {
  const [isChecked, setIsChecked] = useState(task.value);

  const handleCheck = () => {
    console.log("halo mnay");
    setIsChecked(!isChecked);
  };

  const handleNameChange = () => {
    console.log("NAMECHANGE");
    //TODO
  };

  return (
    <TaskContainer>
      <p>{index + 1}.</p>
      <TaskWrap>
        <TaskName
          type="text"
          value={task.name}
          size={task.name.length}
          onChange={handleNameChange}
        />
        <Checkbox onClick={handleCheck} isChecked={isChecked}>
          <span />
        </Checkbox>
      </TaskWrap>
    </TaskContainer>
  );
};

export default CheckboxTask;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.4rem;
    width: 30px;
  }
`;
const TaskWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  padding: 0.25rem 0;
`;
const TaskName = styled.input`
  max-width: 500px;
  height: 30px;
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.detail};
  font-size: 1.4rem;
  /* border-bottom: ${({ theme }) => `1px solid ${theme.colors.detail}`}; */
`;
const Checkbox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
  cursor: pointer;
  span {
    display: block;
    transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    width: ${({ isChecked }) => (isChecked ? "20px" : "0")};
    height: ${({ isChecked }) => (isChecked ? "20px" : "0")};
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
