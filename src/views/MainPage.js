import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../assets/bbblurry.svg";

const MainPage = () => {
    return (
        <MainPageContainer>
            <ContentWrap>
                <BgImage src={bgImg} />
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aspernatur cupiditate placeat unde veritatis ratione.</h1>
                <StyledLink to="/register">Sign Up</StyledLink>
                <HeroContent>
                    <h2>Choose from 4 types of tasks:</h2>
                    <ul>
                        <li>✅ Simple Checkbox</li>
                        <li>⌛ Start/Stop Timer</li>
                        <li>🔰 Segments</li>
                        <li>🧮 Counter</li>
                    </ul>
                </HeroContent>
                <h2>Create account now</h2>
            </ContentWrap>
        </MainPageContainer>
    );
};

export default MainPage;

const MainPageContainer = styled.main`
    min-height: calc(100vh - 100px);
    margin: 0 auto;
    padding: 8rem 1rem;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.detail};
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: linear-gradient(180deg, hsl(217deg 66% 12%) 53%, hsl(214deg 85% 16%) 93%, hsl(212deg 100% 20%) 100%, hsl(213deg 100% 26%) 101%, hsl(214deg 100% 31%) 102%, hsl(215deg 100% 37%) 101%, hsl(220deg 80% 48%) 100%);
    box-shadow: ${({ theme }) => theme.shadows.black80};
`;

const ContentWrap = styled.div`
    position: relative;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > h1 {
        max-width: 800px;
        font-size: 3.4rem;
        letter-spacing: 0.25rem;
        padding: 2rem 0;
        > span {
            border-bottom: ${({ theme }) => `1px solid ${theme.colors.detail}`};
        }
    }
`;

const HeroContent = styled.div`
    pointer-events: none;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    > ul {
        padding: 1rem 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        li {
            width: fit-content;
            padding: 0.5rem 0.25rem;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            font-size: 1.4rem;
        }
    }
    > p {
        font-size: 1.4rem;
    }
`;

const BgImage = styled.img`
    position: absolute;
    width: 1000px;
    right: -10%;
    bottom: -50%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.75rem 1.25rem;
    border-radius: 2px;
    margin: 1rem 0;
    font-size: 1.8rem;
`;
