import styled from "styled-components";

type ButtonType = {
    color: string
}

export const Button = styled.button<ButtonType>`
    font-family: 'Jost';
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    color: ${props => props.color || 'black'};
    position: relative;
    transition: transform 0.5s ease-in-out;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    z-index: 0;

    &:hover {
    transform: translate(0px, 2px); 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    }
`