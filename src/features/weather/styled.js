import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    width: 300px;
    text-align: center;
`;

export const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    width: 80%;
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.accent};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background: #4fa3d1;
    }
`;

export const Info = styled.div`
   text-align: center;
`;