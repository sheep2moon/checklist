import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setTheme } from "../../redux/themeSlice.js";
import { themes } from "../../themes.js";
import { AiOutlineClose } from "react-icons/ai";

const ThemeSelectingModal = ({ setIsThemeModalOpen }) => {
    const dispatch = useDispatch();

    const handleSetTheme = name => {
        localStorage.setItem("pickedTheme", name);
        dispatch(setTheme(name));
    };

    return (
        <Backdrop onClick={() => setIsThemeModalOpen(false)}>
            <ModalWrap onClick={e => e.stopPropagation()}>
                {themes.map(theme => (
                    <ThemeOption key={theme.name} onClick={() => handleSetTheme(theme.name)} bgColor={theme.colors.primary} textColor={theme.colors.detail}>
                        <p>{theme.name}</p>
                    </ThemeOption>
                ))}
                <CloseBtn onClick={() => setIsThemeModalOpen(false)}>
                    <AiOutlineClose />
                </CloseBtn>
            </ModalWrap>
        </Backdrop>
    );
};

export default ThemeSelectingModal;

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
    border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    box-shadow: ${({ theme }) => theme.shadows.black80};
    border-radius: 2rem;
    z-index: 0;
    padding: 4rem;
    padding-bottom: 1rem;
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

const CloseBtn = styled.button`
    grid-column: span 3;
    padding: 0.75rem;
    background: none;
    border: none;
    border-radius: 0.5rem;
    svg {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.detail};
    }
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
        transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        box-shadow: ${({ theme }) => theme.shadows.black40};
    }
`;
