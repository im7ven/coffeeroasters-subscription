import styled from "styled-components";
import { flexColumnToRowT, grey } from "./styles.utilities";
import { h4 } from "./styles.typography";

export const SelectionContainer = styled.section``;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.9rem;
`;

export const BlockHeading = styled.h3`
  ${h4}
  ${grey}
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
`;
