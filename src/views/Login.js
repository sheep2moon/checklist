import React from "react";
import { BgContainer } from "../components/BgContrainer.js";
import styled from "styled-components";
import TextInput from "../components/Inputs/TextInput.js";
import { StyledButton } from "../components/Inputs/StyledButton.js";

const Login = () => {
  const handleLogin = (e) => {
    console.log("handleLogin");
    e.preventDefault();
  };

  return (
    <BgContainer>
      <LoginWrapper>
        <FormWrapper>
          <Title>Login</Title>
          <Form onSubmit={(e) => handleLogin(e)}>
            <TextInput text={"Email"} />
            <TextInput text={"Password"} />
            <StyledButton>Login</StyledButton>
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
`;
const Title = styled.h4`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.detail};
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
