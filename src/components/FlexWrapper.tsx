import styled from "styled-components";
import { Theme } from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string 
    align?: string
    wrap?: string
    text?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType> `
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};    
    height: 100%;
    /* text-align: ${props => props.text || "center"};     */

    @media ${Theme.media.desktop} {
        flex-wrap: nowrap;
    }
`