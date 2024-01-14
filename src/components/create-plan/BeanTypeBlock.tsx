import { useState } from "react";
import arrowIcon from "../../images/plan/desktop/icon-arrow.svg";
import {
  ArrowIcon,
  BlockHeading,
  CardWrapper,
  HeadingWrapper,
  SelectionContainer,
} from "../../styles/styles.plan-block";
import SelectionCard from "./SelectionCard";
import { useSelection } from "../../context/SelectionCardContect";

const BeanTypeBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { selection, setSelection } = useSelection();

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
    if (cardId === 1) {
      setSelection({ ...selection, bean: "Single Origin" });
    } else if (cardId === 2) {
      setSelection({ ...selection, bean: "Decaf" });
    } else {
      setSelection({ ...selection, bean: "Blended" });
    }
  };

  const handleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SelectionContainer>
      <HeadingWrapper>
        <BlockHeading>What type of coffee?</BlockHeading>
        <ArrowIcon
          className={isExpanded ? "expanded" : ""}
          onClick={() => handleVisibility()}
          src={arrowIcon}
        />
      </HeadingWrapper>
      {isExpanded && (
        <CardWrapper>
          <SelectionCard
            cardHeading="Single Origin"
            cardId={1}
            onActive={handleActivation}
            isActive={activeCard === 1}
          >
            Distinct, high quality coffee from a specific family-owned farm
          </SelectionCard>
          <SelectionCard
            cardHeading="Decaf"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            Just like regular coffee, except the caffeine has been removed
          </SelectionCard>
          <SelectionCard
            cardHeading="Blended"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            Combination of two or three dark roasted beans of organic coffees
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default BeanTypeBlock;
