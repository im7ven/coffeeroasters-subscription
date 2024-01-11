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
import SelectionCard from "./SelectionCard";
import { useState } from "react";

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

const ArrowIcon = styled.img`
  transition: 0.3s;

  &.expanded {
    transform: rotate(180deg);
  }
`;

const CardWrapper = styled.div`
  ${flexColumnToRowT}
  gap: 1.6rem;
`;

interface Props {
  blockHeading: string;
  cardHeading: string;
  description: string;
}

const SelectionCardBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
  };

  const handleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SelectionContainer>
      <HeadingWrapper>
        <BlockHeading>How much would you like?</BlockHeading>
        <ArrowIcon
          className={isExpanded ? "expanded" : ""}
          onClick={() => handleVisibility()}
          src={arrowIcon}
        />
      </HeadingWrapper>
      {isExpanded && (
        <CardWrapper>
          <SelectionCard
            cardHeading="Capsule"
            cardId={1}
            onActive={handleActivation}
            isActive={activeCard === 1}
          >
            Compatible with Nespresso systems and similar brewers
          </SelectionCard>
          <SelectionCard
            cardHeading="Capsule"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            Compatible with Nespresso systems and similar brewers
          </SelectionCard>
          <SelectionCard
            cardHeading="Capsule"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            Compatible with Nespresso systems and similar brewers
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default SelectionCardBlock;
