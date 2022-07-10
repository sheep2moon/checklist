import React from "react";
import styled from "styled-components";

const SectionBar = ({ selectedSection, setSelectedSection }) => {
    return (
        <SectionBarContainer>
            <SectionBtn onClick={() => setSelectedSection("daily")} isActive={selectedSection === "daily"}>
                Daily Routine
            </SectionBtn>
            <SectionBtn onClick={() => setSelectedSection("targets")} isActive={selectedSection === "targets"}>
                Targets
            </SectionBtn>
        </SectionBarContainer>
    );
};

export default SectionBar;

const SectionBarContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondary};
    gap: 2px;
`;

const SectionBtn = styled.div`
    background-color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary : theme.colors.primary)};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    width: 100%;
    display: grid;
    place-items: center;
    :hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;
