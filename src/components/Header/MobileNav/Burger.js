import React from "react";
import styled from "styled-components";

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;

const StyledBurger = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus {
        outline: none;
    }

    div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        background: ${({ theme }) => theme.colors.accent};
        border-radius: 10px;
        transition: all 0.3s linear;
        transform-origin: 1px;

        :first-child {
            bottom: ${({ open }) => (open ? "8" : "0")};
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
        }

        :nth-child(3) {
            top: ${({ open }) => (open ? "8" : "0")};
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;
