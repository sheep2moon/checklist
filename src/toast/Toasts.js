import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "../redux/toastSlice.js";

const Toasts = () => {
    const { list } = useSelector(store => store.toast);

    const dispatch = useDispatch();

    const handleCloseTimeout = id => {
        setTimeout(() => dispatch(removeToast(id)), 5000);
    };
    return (
        <ToastContainer>
            {list.map(toast => {
                handleCloseTimeout(toast.id);
                return (
                    <Toast key={toast.id} type={toast.type} id={toast.id}>
                        {toast.message}
                    </Toast>
                );
            })}
        </ToastContainer>
    );
};

export default Toasts;

const ToastContainer = styled.div`
    position: fixed;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 999;
`;

const Toast = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.detail};
    border: ${({ theme, type }) => (type === "success" ? `2px solid ${theme.toast.success}` : type === "error" ? `2px solid ${theme.toast.error}` : `2px solid ${theme.toast.neutral}`)};
    border-radius: 0.25rem;
    padding: 1rem 2rem;
`;
