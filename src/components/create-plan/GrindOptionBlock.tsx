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

const GrindOptionBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { selection, setSelection } = useSelection();

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
    if (cardId === 1) {
      setSelection({ ...selection, quantity: "Wholebean" });
    } else if (cardId === 2) {
      setSelection({ ...selection, quantity: "Filter" });
    } else {
      setSelection({ ...selection, quantity: "Cafetiere" });
    }
  };

  const handleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SelectionContainer>
      <HeadingWrapper>
        <BlockHeading>Want us to grind them?</BlockHeading>
        <ArrowIcon
          className={isExpanded ? "expanded" : ""}
          onClick={() => handleVisibility()}
          src={arrowIcon}
        />
      </HeadingWrapper>
      {isExpanded && (
        <CardWrapper>
          <SelectionCard
            cardHeading="Wholebean"
            cardId={1}
            onActive={handleActivation}
            isActive={activeCard === 1}
          >
            Best choice if you cherish the full sensory experience
          </SelectionCard>
          <SelectionCard
            cardHeading="Filter"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            For drip or pour-over coffee methods such as V60 or Aeropress
          </SelectionCard>
          <SelectionCard
            cardHeading="Cafetiere"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            Course ground beans specially suited for french press coffee
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default GrindOptionBlock;
