import React, { useState } from "react";
import { BiPalette } from "react-icons/bi";
import styled from "styled-components";
import ThemeSelectingModal from "./ThemeSelectingModal.js";

const ThemeSelector = () => {
    const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

    return (
        <>
            <ThemeSelectButton onClick={() => setIsThemeModalOpen(true)}>
                Theme
                <BiPalette />
            </ThemeSelectButton>
            {isThemeModalOpen && <ThemeSelectingModal setIsThemeModalOpen={setIsThemeModalOpen} />}
        </>
    );
};

export default ThemeSelector;

const ThemeSelectButton = styled.button`
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    margin-right: 2rem;
    font-size: 1.2rem;
    padding: 0.25rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.detail};
    border: none;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.detail}`};
    svg {
        color: ${({ theme }) => theme.colors.accent};
        margin-left: 0.5rem;
    }
    :hover {
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.shadows.white80};
    }
`;
