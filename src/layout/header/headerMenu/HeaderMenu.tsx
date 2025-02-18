import styled from "styled-components";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
                <ul>

                    {props.menuItems.map((mainItems, index)=>{
                        return (
                        <ListItem key={index}>
                            <Link href="">
                            {mainItems}
                            <Mask>
                                <span>{mainItems}</span>
                            </Mask>
                            <Mask>
                                <span>{mainItems}</span>
                            </Mask>

                            </Link>
                        </ListItem>
                    )})}
                </ul>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav `
    ul{
        display: flex;
        gap: 30px;
    }
`


const Link = styled.a `
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 30px;
    color: black;
    display: inline-block;
    position: relative;


`

const Mask = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    color: rgba(0, 0, 0, 0.189);
    transition: transform 0.5s ease-in-out;
    z-index: -1;





    /* & + & {
        top: 50%;
        span{
            display: inline-block;
            color: black;
            transform: translateY(-50%);
        }
    } */
    
    
    /* text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    z-index: -1; */
    
`
const ListItem = styled.li `
    position: relative;

    &:hover{
        ${Mask} {
            transform: translate(2px, 2px);
        }

    }
`