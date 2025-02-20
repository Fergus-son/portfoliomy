import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>MY TECH STACK</SectionTitle>
                <AfterTitle>Technologies I've been working with recently</AfterTitle>
                <FlexWrapper wrap='wrap' justify='center'>
                    <Skill iconId={'react'} title='React' />
                    <Skill iconId={'tps'} title='Typescript' />
                    <Skill iconId={'css'} title='CSS3' />
                    <Skill iconId={'html'} title='HTML5' />
                    <Skill iconId={'tps'} title='Formik' />
                    <Skill iconId={'tps'} title='Redux' />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 0vh;

    @media ${Theme.media.mobile} {

    }
`

const AfterTitle = styled.h2`

`

