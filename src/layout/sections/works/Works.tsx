import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from '../../../assets/img/photo_2025-02-07_19-48-04.jpg'
import timerImg from '../../../assets/img/photo_2025-02-07_19-48-04.jpg'
import { Container } from "../../../components/Container";

const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA',]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>LATEST WORKS</SectionTitle>
                <FlexWrapper justify="space-around" align="center">
                    <TabMenuStyled>
                        <TabMenu menuItems={worksItems} />
                    </TabMenuStyled>
                </FlexWrapper>
                <FlexWrapper justify="space-between" >
                    <Work title={"Social Network"} src={socialImg} text="SomeInformationSomeInformationSomeInformation
                    SomeInformationSomeInformationSomeInformation
                    SomeInformationSomeInformationSomeInformation"/>
                    <Work title={"Timer"} src={timerImg} text="SomeInformationSomeInformationSomeInformation
                    SomeInformationSomeInformationSomeInformation
                    SomeInformationSomeInformationSomeInformation"/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
`

const TabMenuStyled = styled.header`
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
`



