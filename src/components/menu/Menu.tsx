import styled from "styled-components";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
                <ul>

                    {props.menuItems.map((worksItems, index)=>{
                        return (
                        <li key={index}>
                            <a href="">{worksItems}</a>
                        </li>
                    )})}
                </ul>
        </StyledMenu>
    );
};

console.log(Menu)

const StyledMenu = styled.nav `
    ul{
        display: flex;
        gap: 30px;
    }

    a{
        color: black;
    }
`