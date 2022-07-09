import React from "react";
import { BgContainer } from "../components/BgContrainer.js";
import styled from "styled-components";
import TextInput from "../components/Inputs/TextInput.js";
import { StyledButton } from "../components/Inputs/StyledButton.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabaseConfig.js";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleRegister = async e => {
        e.preventDefault();
        console.log("register");
        console.log(e.target);
        if (password === passwordConfirm && password.length > 5) {
            let { user, error } = await supabase.auth.signUp({
                email,
                password
            });
            console.log(user, error);
        }
    };

    return (
        <BgContainer>
            <LoginWrapper>
                <FormWrapper>
                    <Title>Login</Title>
                    <Form onSubmit={handleRegister}>
                        <TextInput label={"Email"} value={email} setValue={setEmail} />
                        <TextInput type="password" label={"Password"} value={password} setValue={setPassword} />
                        <TextInput type="password" label={"Confirm-Password"} value={passwordConfirm} setValue={setPasswordConfirm} />
                        <StyledButton type="submit">Register</StyledButton>
                    </Form>
                </FormWrapper>
            </LoginWrapper>
        </BgContainer>
    );
};

export default Register;

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
