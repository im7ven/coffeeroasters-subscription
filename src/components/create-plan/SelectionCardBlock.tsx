import styled from "styled-components";
import {
  borderRadius,
  darkCyanBg,
  darkGreyBlue,
  flexColumnToRowT,
  grey,
  lightGreyBg,
  paleOrangeBg,
} from "../../styles/styles.utilities";
import { h4, selectionCardInfo } from "../../styles/styles.typography";
import arrowIcon from "../../images/plan/desktop/icon-arrow.svg";

const SelectionContainer = styled.section``;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.9rem;
`;

const BlockHeading = styled.h3`
  ${h4}
  ${grey}
`;

const ArrowIcon = styled.img``;

const CardContainer = styled.div`
  ${borderRadius}
  ${lightGreyBg}
  padding: 2.4rem 2.5rem;

  &:hover {
    ${paleOrangeBg}
  }

  &.active {
    ${darkCyanBg}
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    height: 25rem;
    padding: 0 2.45rem;
  }
`;

const CardWrapper = styled.div`
  ${flexColumnToRowT}
  gap: 1.6rem;
`;

const CardHeading = styled.h4`
  ${h4}
  ${darkGreyBlue}
  margin: 0 0 .8rem 0;

  @media screen and (min-width: 768px) {
    margin: 3.2rem 0 2.4rem;
  }
`;

const CardDescription = styled.p`
  ${selectionCardInfo}
  ${darkGreyBlue}
  margin: 0;
`;

interface Props {
  blockHeading: string;
  cardHeading: string;
  description: string;
}

const SelectionCardBlock = () => {
  return (
    <SelectionContainer>
      <HeadingWrapper>
        <BlockHeading>How much would you like?</BlockHeading>
        <ArrowIcon src={arrowIcon} />
      </HeadingWrapper>
      <CardWrapper>
        <CardContainer>
          <CardHeading>Single Origin</CardHeading>
          <CardDescription>
            Distinct, high quality coffee from a specific family-owned farm
          </CardDescription>
        </CardContainer>
        <CardContainer>
          <CardHeading>Single Origin</CardHeading>
          <CardDescription>
            Distinct, high quality coffee from a specific family-owned farm
          </CardDescription>
        </CardContainer>
        <CardContainer>
          <CardHeading>Single Origin</CardHeading>
          <CardDescription>
            Distinct, high quality coffee from a specific family-owned farm
          </CardDescription>
        </CardContainer>
      </CardWrapper>
    </SelectionContainer>
  );
};

export default SelectionCardBlock;
