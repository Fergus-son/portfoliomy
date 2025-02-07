import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap='wrap' justify='center'>
                <Skill iconId={'react'} title='react' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                <Skill iconId={'tps'} title='tps' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                <Skill iconId={'css'} title='css' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                <Skill iconId={'html'} title='html' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`