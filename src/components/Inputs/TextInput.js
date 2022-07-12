import React, { useState } from "react";
import styled from "styled-components";

const TextInput = ({ label, value, setValue, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const handleFocus = () => {
        setIsHidden(true);
        setIsFocused(true);
    };
    const handleBlur = e => {
        if (e.target.value.length > 0) setIsHidden(true);
        else {
            setIsHidden(false);
        }
        setIsFocused(false);
    };

    const handleChange = e => {
        if (e.target.value.length < 100) {
            setValue(e.target.value);
        }
    };

    return (
        <InputWrap>
            <StyledLabel isHidden={isHidden}>{label}</StyledLabel>
            <StyledInput autoComplete="new-password" onFocus={handleFocus} onBlur={e => handleBlur(e)} value={value} onChange={handleChange} {...rest} />
            <Bar isFocused={isFocused} />
        </InputWrap>
    );
};

export default TextInput;

const InputWrap = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.detail};
`;
const Bar = styled.div`
    position: relative;
    top: 2px;
    display: block;
    margin: 0 auto;
    width: ${({ isFocused }) => (isFocused ? "100%" : "0px")};
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    top: -2px;
`;
const StyledInput = styled.input`
    padding: 0.75rem 0.5rem 0.25rem 0.5rem;
    outline: none;
    border: none;
    font-size: 1.4rem;
    background: none;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    color: ${({ theme }) => theme.colors.detail};
`;
const StyledLabel = styled.label`
    pointer-events: none;
    transition: all 0.5s ease-in-out;
    font-size: ${({ isHidden }) => (isHidden ? "1rem" : "1.4rem")};
    position: absolute;
    top: ${({ isHidden }) => (isHidden ? "-0.5rem" : "50%")};
    left: ${({ isHidden }) => (isHidden ? "0.2rem" : "1rem")};
    transform: ${({ isHidden }) => (isHidden ? "none" : "translateY(-50%)")};
    opacity: ${({ isHidden }) => (isHidden ? "1" : "0.8")};
`;
