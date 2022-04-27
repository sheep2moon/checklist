import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.detail};
  border-radius: 5px;
  box-shadow: 0 2px 5px #ffffff60;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  :hover {
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.white80};
    cursor: pointer;
  }
`;
