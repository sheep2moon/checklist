import React from "react";
import styled from "styled-components";
import { BgContainer } from "../components/BgContrainer.js";

const MainPage = () => {
  return (
    <BgContainer>
      <MainPageContainer>
        <h1>MainPage</h1>
      </MainPageContainer>
    </BgContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.detail};
`;
