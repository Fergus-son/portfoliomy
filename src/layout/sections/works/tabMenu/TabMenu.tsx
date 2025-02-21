import styled from "styled-components";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.menuItems.map((worksItems, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">
                                {worksItems}
                                <Mask>
                                    <span>{worksItems}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.div`
        border: 2px solid black;
        padding: 0px -10px 0px -10px;
        margin: -30px 0px 70px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    ul{
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 15px;   
    }


`
const Link = styled.a`
    font-size: 22px;
`


const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(0, 0, 0, 0.412);
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