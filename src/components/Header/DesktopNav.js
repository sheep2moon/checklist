import React from "react";
import { BiTask } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSelector from "../ThemeSelector/index.js";

const DesktopNav = ({ handleLogout }) => {
    const { user_id } = useSelector(store => store.user);

    return (
        <NavWrap>
            <ThemeSelector />
            <NavOptions>
                <StyledLink to="/dashboard">
                    Dashboard
                    <BiTask />
                </StyledLink>
                <UserControls>{user_id ? <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn> : <LoginLink to="/login">Login</LoginLink>}</UserControls>
            </NavOptions>
        </NavWrap>
    );
};

export default DesktopNav;

const NavWrap = styled.nav`
    @media (max-width: 768px) {
        display: none;
    }
`;
const LogoutBtn = styled.button`
    border: none;
    padding: 0.25rem;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    color: #000;
    padding: 0.25rem;
    color: ${({ theme }) => theme.colors.detail};
    display: flex;
    align-items: center;
    svg {
        margin-left: 0.5rem;
    }
    :hover {
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.shadows.accent};
    }
`;
const UserControls = styled.div`
    margin-left: 2rem;
`;
const LoginLink = styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    color: #000;
    padding: 0.25rem;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    :hover {
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.shadows.accent};
    }
`;

const NavOptions = styled.div`
    display: flex;
    margin-left: auto;
    align-items: flex-end;
`;
