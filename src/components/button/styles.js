import styled from "styled-components";
import { buttonStyleNormal } from "./mixins";

export const Btn = styled.button`
    height: 32px;
    padding: 0 24px;
    font-size: 0.875rem;
    white-space: nowrap;
    text-alighn: center;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${buttonStyleNormal("red", "blue", "green")}

`;