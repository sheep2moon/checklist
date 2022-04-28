import { addDays, format, subDays } from "date-fns";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CgChevronLeftR, CgChevronRightR } from "react-icons/cg";

const TimeBar = ({ pickedTime, setPickedTime }) => {
  // 7 days - ..... today tommorow

  const [dayList, setDayList] = useState([]);
  const [currentListIndexes, setCurrentListIndexes] = useState({});

  const handleMoveLeft = () => {
    if (currentListIndexes.left === 0) return;
    const left = currentListIndexes.left - 1;
    const right = currentListIndexes.right - 1;
    setCurrentListIndexes({ left, right });
  };
  const handleMoveRight = () => {
    if (currentListIndexes.right === 24) return;
    const left = currentListIndexes.left + 1;
    const right = currentListIndexes.right + 1;
    setCurrentListIndexes({ left, right });
  };

  useEffect(() => {
    //Create starting list - 25days
    let newList = [];
    const today = new Date();
    setPickedTime(format(today, "dd.MM"));
    for (let i = 12; i >= 0; i--) {
      const currDay = subDays(today, i);
      newList.push(format(currDay, "dd.MM"));
    }
    for (let i = 1; i < 12; i++) {
      const currDay = addDays(today, i);
      newList.push(format(currDay, "dd.MM"));
    }
    newList.push(format(addDays(today, 1), "dd.MM"));
    setDayList(newList);
    setCurrentListIndexes({ left: 10, right: 15 });
  }, []);

  return (
    <BarContainer>
      <MoveListBtn onClick={handleMoveLeft}>
        <CgChevronLeftR />
      </MoveListBtn>
      {dayList
        .slice(currentListIndexes.left, currentListIndexes.right)
        .map((day) => (
          <DayButton
            key={day}
            onClick={() => setPickedTime(day)}
            isActive={pickedTime === day}
          >
            {day}
          </DayButton>
        ))}
      <MoveListBtn onClick={handleMoveRight}>
        <CgChevronRightR />
      </MoveListBtn>
    </BarContainer>
  );
};

export default TimeBar;

const BarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 1px;
  grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 1fr 0.25fr;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
const DayButton = styled.button`
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 0.5rem 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.detail};
  font-size: 1.25rem;
  opacity: 0.8;
  border-bottom: ${({ theme, isActive }) =>
    isActive
      ? `4px solid ${theme.colors.accent}`
      : `4px solid ${theme.colors.secondary}`};
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const MoveListBtn = styled.button`
  padding: 0.25rem;
  background: none;
  color: ${({ theme }) => theme.colors.detail};
  border: none;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  svg {
    font-size: 2rem;
  }
  :hover {
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
