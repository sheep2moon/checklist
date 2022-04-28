import React from "react";
import styled from "styled-components";
import CheckboxTask from "./CheckboxTask.js";
import NumberTask from "./NumberTask.js";

const tempTasks = [
  {
    name: "run at least 3km",
    type: "checkbox",
    value: false,
  },
  {
    name: "read at least 10 page of any book",
    type: "checkbox",
    value: false,
  },
  {
    name: "make some pushups",
    type: "number",
    value: 0,
  },
];

const DailyTasks = () => {
  return (
    <TaskContainer>
      <h2>DailyTASKS</h2>
      {tempTasks.map((task, index) => {
        if (task.type === "checkbox") {
          return <CheckboxTask key={task.name} index={index} task={task} />;
        } else if (task.type === "number") {
          return <NumberTask key={task.name} index={index} task={task} />;
        }
        return <p>invalid task type</p>;
      })}
    </TaskContainer>
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
