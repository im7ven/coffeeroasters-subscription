import styled from "styled-components";
import { flexColumnToRowT, grey } from "./styles.utilities";
import { h2 } from "./styles.typography";

export const SelectionContainer = styled.section`
  margin-bottom: 11.2rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 8.8rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.9rem;

  &.disabled {
    opacity: 0.4;
  }
`;

export const BlockHeading = styled.h3`
  ${h2}
  ${grey}
  font-size: 2.4rem;
  margin: 0;

  // @media screen and (min-width: 1024px) {
  //   margin: 2.4rem 0 5.6rem;
  // }
`;

export const ArrowIcon = styled.img`
  transition: 0.3s;

  &.expanded {
    transform: rotate(180deg);
  }
`;

export const CardWrapper = styled.div`
  ${flexColumnToRowT}
  gap: 1.6rem;
  padding-top: 5.6rem;
`;
