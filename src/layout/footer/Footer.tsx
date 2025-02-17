import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name>Nikolay</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="facebook" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="lkdin" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="twitter" />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21" width="21" viewBox="0 0 21 21" iconId="youtube" />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2025 Sharapov Nikolay, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: orange;
    min-height: 20vh;
    
`

const Name = styled.span`
    
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    
`

const Copyright = styled.small`
    
`
