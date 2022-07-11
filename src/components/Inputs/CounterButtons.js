import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import styled from "styled-components";

export const AddButton = ({ ...rest }) => {
    return (
        <SButton {...rest}>
            <HiPlusSm />
        </SButton>
    );
};
export const SubButton = ({ ...rest }) => {
    return (
        <SButton {...rest}>
            <HiMinusSm />
        </SButton>
    );
};

const SButton = styled.button`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.detail};
    font-size: 1.4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.2s ease-in-out;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    :hover {
        transition: all 0.2s ease-in-out;
        background: ${({ theme }) => theme.colors.primary};
        border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
        color: ${({ theme }) => theme.colors.detail};
        cursor: pointer;
    }
`;
