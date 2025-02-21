import styled from "styled-components";
// import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
// import { MobileMenu } from "./headerMenu/MobileMenu";

const mainItems = ['HOME', 'SKILLS', 'WORKS', 'TESTIMONIALS', 'CONTACTS',]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-around" align="center">
                    {/* <Logo />     */}
                    <HeaderMenu menuItems={mainItems} />
                    {/* <MobileMenu menuItems={mainItems}/> */}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    border-radius: 10px;
    /* background-color: rgba(208, 205, 206, 0.5); */
    /* background-color: rgba(243, 241, 242, 0.458); */
    /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); */
    /* padding: 20px 0; */
`


