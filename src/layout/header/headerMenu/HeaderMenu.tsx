import styled from "styled-components";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>

                {props.menuItems.map((mainItems, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">
                                {mainItems}
                                <Mask>
                                    <span>{mainItems}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledHeaderMenu>

    );
};


const StyledHeaderMenu = styled.nav`
    border: 1px solid black;
    /* border-radius: 30px; */
    box-shadow: 2px 2px 2px  rgba(0, 0, 0, 0.696);
    background-color: #ffffff59;
    /* padding: 0px -10px 0px -10px; */
    /* margin: -30px 0px 70px; */

    ul{
        display: flex;
        gap: 30px;
        margin: 15px;
        text-align: center;
    }

`


const Link = styled.a`
    font-size: 30px;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(0, 0, 0, 0.601);
    transition: transform 0.5s ease-in-out;
    z-index: -1;
    
`
const ListItem = styled.li`
    position: relative;

    &:hover{
        ${Mask} {
            transform: translate(2px, 2px);
        }

    }
`