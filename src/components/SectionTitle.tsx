import styled from "styled-components";

export const AfterTitle = styled.p`
    font-family: 'Manrope';
    font-weight: 400;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
    /* font-size: 20px; */
    
`

export const SectionTitle = styled.h2`
    font-family: 'Jost';
    text-align: center;
    font-size: 60px;
    font-weight: 120;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 1);
    margin: -30px 0 50px 0;

    /* width: 560px; */
    /* height: 180px; */



    & + ${AfterTitle} {
        margin: -40px 0 50px 0;
    }

`
