import { addDays, format, subDays } from "date-fns";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimeBar = () => {
  // 7 days - ..... today tommorow

  const [dayList, setDayList] = useState([]);

  useEffect(() => {
    let newList = [];
    const today = new Date();
    for (let i = 5; i >= 0; i--) {
      const currDay = subDays(today, i);
      newList.push(format(currDay, "dd.MM"));
    }
    newList.push(format(addDays(today, 1), "dd.MM"));
    setDayList(newList);
  }, []);

  return (
    <BarContainer>
      {dayList.map((day) => (
        <DayButton>{day}</DayButton>
      ))}
    </BarContainer>
  );
};

export default TimeBar;

const BarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(7, 1fr);
`;
const DayButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  opacity: 0.8;
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.detail}`};
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;
