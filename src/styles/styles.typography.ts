import styled, { css } from "styled-components";
import { darkCyan } from "./styles.utilities";

export const baseFont = css`
  font-family: Fraunces, serif;
`;

export const h1 = css`
  ${baseFont}
  font-size: 4rem;
  color: #fefcf7;
  line-height: 4rem;

  @media screen and (min-width: 768px) {
    line-height: 4.8rem;
    font-size: 4.8rem;
  }

  @media screen and (min-width: 1024px) {
    line-height: 7.2rem;
    font-size: 7.2rem;
  }
`;

export const h2 = css`
  ${baseFont}
  font-size: 2.8rem;
  color: #fefcf7;
  line-height: 2.8rem;

  @media screen and (min-width: 768px) {
    line-height: 4rem;
    font-size: 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    line-height: 4.8rem;
    font-size: 4rem;
  }
`;

export const h3 = css`
  ${baseFont}
  font-size: 2.8rem;
  line-height: 3.2rem;

  @media screen and (min-width: 1024px) {
    font-size: 3.2rem;
    line-height: 3.6rem;
  }
`;

export const h4 = css`
  ${baseFont}
  font-size: 2.4rem;
  color: #fefcf7;
  line-height: 3.2rem;
`;

export const BodyText = styled.p`
  font-family: Barlow, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: #fefcf7;
  margin: 0;

  &.black {
    color: #333d4b;
  }

  &.white {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

export const Highlight = styled.p`
  ${h4}
  ${darkCyan}
  display: inline;
  line-height: 4rem;
`;
