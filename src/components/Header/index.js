import React, { useState } from "react";
import styled from "styled-components";
import logoSvg from "../../assets/logo.svg";
import { ReactComponent as LogoComponent } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { BiPalette, BiTask } from "react-icons/bi";
import ThemeSelectingModal from "./ThemeSelectingModal.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isUserLoggedIn } from "../../utils/auth.js";
import { setUserData } from "../../redux/userSlice.js";
import { supabase } from "../../supabase/supabaseConfig.js";

const Header = ({ setActiveTheme, themes }) => {
    const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserLoggedIn()) {
            dispatch(setUserData(supabase.auth.user()));
        }
    }, []);

    return (
        <>
            <ThemeSelectButton onClick={() => setIsThemeModalOpen(true)}>
                Theme
                <BiPalette />
            </ThemeSelectButton>
            {isThemeModalOpen && <ThemeSelectingModal setIsThemeModalOpen={setIsThemeModalOpen} setActiveTheme={setActiveTheme} themes={themes} />}
            <HeaderContainer role="banner">
                <StyledNav>
                    <LogoLink to="/">
                        <LogoComponent />
                        <h2>DoIT</h2>
                        <span />
                    </LogoLink>
                    <NavOptions>
                        <StyledLink to="/dashboard">
                            Dashboard
                            <BiTask />
                        </StyledLink>
                        <UserControls>
                            <LoginLink to="/login">Login</LoginLink>
                        </UserControls>
                    </NavOptions>
                </StyledNav>
            </HeaderContainer>
        </>
    );
};

export default Header;

const HeaderContainer = styled.header`
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.black80};
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.detail};
    svg {
        width: 60px;
        fill: ${({ theme }) => theme.colors.accent};
    }
    h2 {
        font-size: 2rem;
        margin-left: 1rem;
        text-decoration: none;
    }
    span {
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.accent};
        box-shadow: ${({ theme }) => theme.shadows.black80};
    }
`;

const StyledNav = styled.nav`
    max-width: 1200px;
    padding: 2rem 1rem 0.5rem 1rem;
    display: flex;
    margin: 0 auto;
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
const ThemeSelectButton = styled.button`
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    margin-right: 2rem;
    font-size: 1.2rem;
    padding: 0.25rem;
    color: ${({ theme }) => theme.colors.detail};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 4px;
    svg {
        color: ${({ theme }) => theme.colors.accent};
        margin-left: 0.5rem;
    }
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
