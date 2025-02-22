import styled from "styled-components";

export const SwitchContainer = styled.div`
    margin: 10px;
    text-align: center;

`;

export const ToggleButton = styled.button`
    padding: 10px;
    border: none;
    background: ${({ theme }) => theme.accent};
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background: #4fa3d1;
  }
`; 