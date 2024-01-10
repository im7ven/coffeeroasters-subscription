// Color Pallete

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const darkCyan = css`
  color: #0e8784;
`;

export const darkCyanBg = css`
  background-color: #0e8784;
`;

export const darkGreyBlue = css`
  color: #333d4b;
`;
export const darkGreyBlueBg = css`
  background-color: #333d4b;
`;

export const paleOrange = css`
  color: #fdd6ba;
`;
export const paleOrangeBg = css`
  background-color: #fdd6ba;
`;

export const lightCream = css`
  color: #fefcf7;
`;
export const lightCreamBg = css`
  background-color: #fefcf7;
`;

export const grey = css`
  color: #83888f;
`;
export const greyBg = css`
  background-color: #83888f;
`;

export const lightGrey = css`
  color: #f4f1eb;
`;

export const lightGreyBg = css`
  background-color: #f4f1eb;
`;

// Block

export const block = css`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const flexColumnToRowT = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const flexColumnToRowD = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

// Other

export const borderRadius = css`
  border-radius: 10px;
`;

export const PrimaryBtn = styled(Link)`
  ${lightCream}
  ${darkCyanBg}
  border-radius: 6px;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 1.5rem 3.1rem;
  text-decoration: none;
  font-family: Fraunces, serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5rem;

  .&secondary {
    display: block;
    width: 100%;
  }

  &.disabled {
    background-color: #e2dedb;
    transition: 0.3s ease-out;
  }

  &:hover {
    background-color: #66d2cf;
    transition: 0.3s ease-out;
  }
`;
