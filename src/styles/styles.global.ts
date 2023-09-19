import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

::selection {
    color:#fff;
    background-color: #66D2CF; ;
}
`;

export const PagePadding = styled.div`
  padding: 3.2rem 2.4rem 7.2rem;

  @media screen and (min-width: 768px) {
    padding: 4rem 4rem 7.2rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 4.3rem 4rem 8.8rem;
  }
`;
