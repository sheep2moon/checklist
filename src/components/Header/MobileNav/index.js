import React from "react";
import { useState } from "react";
import { BiLogOut, BiTask } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSelector from "../../ThemeSelector/index.js";
import Burger from "./Burger.js";

const MobileNav = () => {
    const { user_id } = useSelector(store => store.user);
    const [open, setOpen] = useState();

    return (
        <NavWrap>
            <Burger open={open} setOpen={setOpen} />
            <NavOptions open={open}>
                <CloseBtn onClick={() => setOpen(false)}>Close</CloseBtn>
                <StyledLink to="/dashboard">
                    Dashboard <BiTask />{" "}
                </StyledLink>

                {user_id ? (
                    <LogoutButton>
                        Logout
                        <BiLogOut />
                    </LogoutButton>
                ) : (
                    <>
                        <StyledLink to="/login">Login</StyledLink>
                        <StyledLink to="/login">register</StyledLink>
                    </>
                )}

                <ThemeSelector onClick={() => setOpen(false)} />
            </NavOptions>
        </NavWrap>
    );
};

export default MobileNav;

const NavWrap = styled.nav`
    @media (min-width: 768px) {
        display: none;
    }
`;

const NavOptions = styled.div`
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 92px;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.black80};
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    box-shadow: ${({ theme }) => theme.shadows.black40};
    color: ${({ theme }) => theme.colors.detail};
    text-decoration: none;
    font-size: 1.2rem;
    svg {
        font-size: 1.2rem;
    }
`;

const LogoutButton = styled.button`
    padding: 1rem 0;
    margin-top: 1rem;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.black40};
    color: ${({ theme }) => theme.colors.detail};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    gap: 0.5rem;
    svg {
        font-size: 1.2rem;
    }
`;

const CloseBtn = styled.button`
    width: 100%;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    margin-bottom: 2rem;
    :hover {
        box-shadow: ${({ theme }) => theme.shadows.black80};
        cursor: pointer;
    }
`;
