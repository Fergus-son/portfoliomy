import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>SKILLS</SectionTitle>
                <FlexWrapper wrap='wrap' justify='center'>
                    <Skill iconId={'react'} title='React' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                    <Skill iconId={'tps'} title='TS' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                    <Skill iconId={'css'} title='CSS3' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                    <Skill iconId={'html'} title='HTML5' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                    <Skill iconId={''} title='Redux-Toolkit' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                    <Skill iconId={''} title='Formik' description='SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformation'/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`