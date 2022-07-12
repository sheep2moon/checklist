import React from "react";
import { BgContainer } from "../components/BgContrainer.js";
import styled from "styled-components";
import TextInput from "../components/Inputs/TextInput.js";
import { StyledButton } from "../components/Inputs/StyledButton.js";
import { useState } from "react";
import { supabase } from "../supabase/supabaseConfig.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner.js";
import { setLoading } from "../redux/loadingSlice.js";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const dispatch = useDispatch();
    const { loading } = useSelector(store => store.loading);

    const handleRegister = async e => {
        e.preventDefault();
        dispatch(setLoading(true));
        if (password === passwordConfirm && password.length > 5) {
            let { user, error } = await supabase.auth.signUp({
                email,
                password
            });
            if (user) {
                setIsRegistered(true);
            }
            console.log(user, error);
        }
        dispatch(setLoading(false));
    };

    if (loading) return <LoadingSpinner />;

    return (
        <BgContainer>
            <LoginWrapper>
                <FormWrapper>
                    <Title>Create account</Title>
                    {isRegistered ? (
                        <ConfrimEmailWrap>
                            <h3>Confirm email address</h3>
                            <p>{email}</p>
                            <StyledLink to="/login">Login</StyledLink>
                        </ConfrimEmailWrap>
                    ) : (
                        <Form onSubmit={handleRegister}>
                            <TextInput label={"Email"} value={email} setValue={setEmail} />
                            <TextInput type="password" label={"Password"} value={password} setValue={setPassword} />
                            <TextInput type="password" label={"Confirm-Password"} value={passwordConfirm} setValue={setPasswordConfirm} />
                            <StyledButton type="submit">Register</StyledButton>
                        </Form>
                    )}
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

const ConfrimEmailWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    > p {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const StyledLink = styled(Link)`
    margin-top: 1.25rem;
    text-decoration: none;
    font-size: 1.4rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
`;
