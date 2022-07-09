import React from "react";
import { BgContainer } from "../components/BgContrainer.js";
import styled from "styled-components";
import TextInput from "../components/Inputs/TextInput.js";
import { StyledButton } from "../components/Inputs/StyledButton.js";
import { useState } from "react";
import { supabase } from "../supabase/supabaseConfig.js";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";
import { Link, useNavigate } from "react-router-dom";
import { addToast } from "../redux/toastSlice.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) {
            dispatch(addToast({ type: "error", message: error.message }));
        } else {
            dispatch(setUserData(user));
            navigate("/");
        }
    };

    const handleGithubLogin = async () => {
        let { user, error } = await supabase.auth.signIn({
            provider: "github"
        });
        dispatch(setUserData(user));
        console.log(user, error);
    };

    return (
        <BgContainer>
            <LoginWrapper>
                <FormWrapper>
                    <Title>Login</Title>
                    <Form onSubmit={e => handleLogin(e)}>
                        <TextInput label={"Email"} value={email} setValue={setEmail} />
                        <TextInput type="password" label={"Password"} value={password} setValue={setPassword} />
                        <StyledButton>Login</StyledButton>
                        <RegisterLink to="/register">register</RegisterLink>
                        <p>or</p>
                        <StyledButton onClick={handleGithubLogin}>Login with Github</StyledButton>
                    </Form>
                </FormWrapper>
            </LoginWrapper>
        </BgContainer>
    );
};

export default Login;

const LoginWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.detail};
`;
const Title = styled.h4`
    font-size: 2rem;
    text-align: start;
    margin-bottom: 2rem;
    &:before {
        content: "";
        position: relative;
        right: 3rem;
        top: 2rem;
        display: block;
        height: 2rem;
        width: 0.25rem;
        background-color: ${({ theme }) => theme.colors.detail};
        box-shadow: 0 0 50px #00000080;
    }
`;

const FormWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 50px #00000080;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
`;

const RegisterLink = styled(Link)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.detail};
`;
