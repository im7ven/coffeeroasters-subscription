import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    font-size: 62.5%
    scroll-behavior: smooth;
}

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

::selection {
    color:#fff;
    background-color: ##66D2CF; ;
}
`;

export default GlobalStyles;
