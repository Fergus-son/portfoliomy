import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const mainItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={mainItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: #d4ffd3;
display: flex;
justify-content: space-between;
`


