import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap='wrap' justify='space-between'>
                <Skill iconId={'facebook'} title='facebook' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                <Skill iconId={'youtube'} title='youtube' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                <Skill iconId={'lkdin'} title='lkdin' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`