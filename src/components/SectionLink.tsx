import styled from "styled-components";

type TypesSectionLink = {
    textcolor?: string
}

export const SectionLink = styled.a<TypesSectionLink>` 
    font-family: 'Jost';
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    padding: 0 7px;
    position: relative;
    transition: transform 0.5s ease-in-out;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    z-index: 0;
    color: ${props => props.textcolor || 'black'};
    display: inline-block;

    &:hover {
        transform: translate(-1px, 1px); 
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    }
`





// &::before {
//     /* content: ""; */
//     /* background-color: black; */
//     display: inline-block;
//     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
//     background-color: #3333334e;


//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     right: 0;
//     z-index: -1;



