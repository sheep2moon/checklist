import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoComponent } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isUserLoggedIn } from "../../utils/auth.js";
import { setUserData } from "../../redux/userSlice.js";
import { supabase } from "../../supabase/supabaseConfig.js";
import { addToast } from "../../redux/toastSlice.js";
import { useNavigate } from "react-router";
import DesktopNav from "./DesktopNav.js";
import MobileNav from "./MobileNav/index.js";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserLoggedIn()) {
            dispatch(setUserData(supabase.auth.user()));
        }
    }, [dispatch]);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            dispatch(addToast({ type: "error", message: error.message }));
        }
        dispatch(setUserData({ id: "", email: "" }));
        navigate("/login");
    };

    return (
        <>
            <HeaderContainer role="banner">
                <HeaderContent>
                    <LogoLink to="/">
                        <LogoComponent />
                        <h2>DoIT</h2>
                        <span />
                    </LogoLink>
                    <DesktopNav handleLogout={handleLogout} />
                    <MobileNav handleLogout={handleLogout} />
                </HeaderContent>
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
const HeaderContent = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    padding-right: 2rem;
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
