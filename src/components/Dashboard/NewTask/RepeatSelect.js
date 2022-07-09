import React from "react";
import styled from "styled-components";

const RepeatSelect = ({ repeatEvery, setRepeatEvery }) => {
    return (
        <SelectWrap>
            <Option isActive={repeatEvery === 1} onClick={() => setRepeatEvery(1)}>
                Day
            </Option>
            <Option isActive={repeatEvery === 7} onClick={() => setRepeatEvery(7)}>
                Week
            </Option>
            <OptionInput type="number" step={1} onChange={e => setRepeatEvery(e.target.value)} />
        </SelectWrap>
    );
};

export default RepeatSelect;

const SelectWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 2rem;
    width: 100%;
`;
const Option = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff20;
`;
const OptionInput = styled.input`
    height: 100%;
    width: 100%;
    border: 1px solid #ffffff20;
    background: none;
    color: ${({ theme }) => theme.colors.detail};
    outline: none;
    padding: 0 0.5rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
