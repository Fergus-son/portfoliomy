import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { AfterTitle } from '../../../components/SectionTitle';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>MY TECH STACK</SectionTitle>
                <AfterTitle>Technologies I've been working with recently</AfterTitle>
                <FlexWrapper wrap='wrap' justify='center'>
                    <Skill iconId={'react'} title='' />
                    <Skill iconId={'tps'} title='' />
                    <Skill iconId={'css'} title='' />
                    <Skill iconId={'html'} title='' />
                    <Skill iconId={'tps'} title='' />
                    <Skill iconId={'tps'} title='' />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 0vh;
`

