import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiFormik } from "react-icons/si";
// import { Icon } from '../../../../components/icon/Icon';


export const Skill = () => {
    return (
        <StyledSkill>
            <FlexWrapper direction='column' align='center'>
                <IconsStyled>
                    <IconBlock>
                        <Icon as={FaReact} />
                        <IconText>React</IconText>
                    </IconBlock>
                    <IconBlock>
                        <Icon as={SiTypescript} />
                        <IconText>TypeScript</IconText>
                    </IconBlock>
                    <IconBlock>
                        <Icon as={SiRedux} />
                        <IconText>Redux</IconText>
                    </IconBlock>
                    <IconBlock>
                        <Icon as={FaHtml5} />
                        <IconText>HTML5</IconText>
                    </IconBlock>
                    <IconBlock>
                        <Icon as={FaCss3Alt} />
                        <IconText>CSS3</IconText>
                    </IconBlock>
                    <IconBlock>
                        <Icon as={SiFormik} />
                        <IconText>Formik</IconText>
                    </IconBlock>
                </IconsStyled>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 300px;
    padding: 62px 20px 40px;
`

const IconBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

const IconsStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
`

const Icon = styled.div`
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 1));
    width: 50px;
    height: 50px;
    color: white;
`

const IconText = styled.p`
    margin-top: 10px;
    font-size: 18px;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
`