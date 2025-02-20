import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
}

a {
    text-decoration: none;
    color: black;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: white;
}

section {
    padding: 100px 0;
    max-width: 100%;
}

h3 {
    font-family: 'Manrope';
    font-size: 22px;
    font-weight: 400;
}

p {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 17px;
    /* line-height: 40px; */
}

h2 {
    font-family: 'Inconsolata';
    font-weight: 400;
    font-size: 22px;
    text-align: center;

    /* text-shadow: 2px 2px 2px rgba(0, 0, 0, 1); */
}

section:nth-of-type(odd) {
    background-color: ${Theme.colors.secondaryBg};
    color: ${Theme.colors.fontEven}
}

section:nth-of-type(even) {
    background-color: ${Theme.colors.primaryBg};
    color: ${Theme.colors.fontOdd}
}

@media ${Theme.media.mobile} {
    section{
        /* padding: 100px 0; */
    }
}

@media ${Theme.media.tablet } {
    
}

@media ${Theme.media.desktop} {
    
}

`

