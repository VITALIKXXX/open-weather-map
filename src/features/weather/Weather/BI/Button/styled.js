import styled from "styled-components";

export const StyledButton = styled.button`
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