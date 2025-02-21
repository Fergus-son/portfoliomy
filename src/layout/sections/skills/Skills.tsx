import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';
import { Skill } from './skill/Skill';



// import { Skill } from './skill/Skill';



export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>MY TECH STACK</SectionTitle>
                <AfterTitle>Technologies I've been working with recently</AfterTitle>
                <FlexWrapper wrap='wrap' justify='center'>
                    <Skill />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 0vh;
    text-align: center;
    

    @media ${Theme.media.mobile} {

    }
`

const AfterTitle = styled.h2`
    display: inline-block;
    background-color: #ffffff68;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    color: black;
    padding: 0 10px;
`
