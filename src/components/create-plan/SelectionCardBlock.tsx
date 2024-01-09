import styled from "styled-components";
import {
  borderRadius,
  darkGreyBlue,
  paleOrangeBg,
} from "../../styles/styles.utilities";
import { h4, selectionCardInfo } from "../../styles/styles.typography";
import arrowIcon from "../../images/plan/desktop/icon-arrow.svg";

const SelectionContainer = styled.section``;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlockHeading = styled.h3`
  ${h4}
`;

const ArrowIcon = styled.img``;

const CardContainer = styled.div`
  ${borderRadius}
  ${darkGreyBlue}
  padding: 2.4rem 2.5rem;

  &:hover {
    ${paleOrangeBg}
  }
`;

const CardWrapper = styled.div`
  display: flex;
`;

const CardHeading = styled.h4`
  ${h4}
`;

const CardDescription = styled.p`
  ${selectionCardInfo}
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
