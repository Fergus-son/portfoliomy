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
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section {
    padding: 100px 0;
}

/* h2 {
    padding: 0px 1258px 40px 320px;
} */

section:nth-of-type(odd) {
    background-color: ${Theme.colors.secondaryBg};
    color: ${Theme.colors.fontEven}
}

section:nth-of-type(even) {
    background-color: ${Theme.colors.primaryBg};
    color: ${Theme.colors.fontOdd}
}

`