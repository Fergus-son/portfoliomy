import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from '../../../assets/img/photo_2025-02-07_19-48-04.jpg'
import timerImg from '../../../assets/img/photo_2025-02-07_19-48-04.jpg'

const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA',]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu menuItems={worksItems} />
            <FlexWrapper justify="space-around" align="center" >
                <Work title={"Social Network"} src={socialImg} text="SomeInformationSomeInformationSomeInformationSomeInformationSomeInformation
                SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformationSomeInformation"/>
                <Work title={"Timer"} src={timerImg} text="SomeInformationSomeInformationSomeInformationSomeInformationSomeInformation
                SomeInformationSomeInformation
                SomeInformationSomeInformationSomeInformationSomeInformation"/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    /* background-color: #8282e4; */
    /* color: white; */
`