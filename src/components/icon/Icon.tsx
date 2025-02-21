// import Icons from './Icons'
// import iconSprite from './Icons'
// import iconSprite from './icon-sprites.svg'
import styled from 'styled-components';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiFormik } from "react-icons/si";


export const Icon = () => {
    return (
        <IconsStyled>

            <StyledIcon>
                <FaReact />
            </StyledIcon>
            <StyledIcon>
                <SiTypescript />
            </StyledIcon>
            <StyledIcon>
                <SiRedux />
            </StyledIcon>
            <StyledIcon>
                <FaCss3Alt />
            </StyledIcon>
            <StyledIcon>
                <FaHtml5 />
            </StyledIcon>
            <StyledIcon>
                <SiFormik />
            </StyledIcon>
        </IconsStyled>

        // <svg width={props.width || "52"} height={props.height || "50"} viewBox={props.viewBox || "0 0 52 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        // </svg>
    );
};


const StyledIcon = styled.div`
    
`

const IconsStyled = styled.div`
    
`