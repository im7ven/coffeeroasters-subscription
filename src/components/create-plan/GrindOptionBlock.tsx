import { useState } from "react";
import { useSelection } from "../../context/SelectionCardContect";
import arrowIcon from "../../images/plan/desktop/icon-arrow.svg";
import {
  ArrowIcon,
  BlockHeading,
  CardWrapper,
  HeadingWrapper,
  SelectionContainer,
} from "../../styles/styles.plan-block";
import SelectionCard from "./SelectionCard";

const GrindOptionBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { selection, setSelection } = useSelection();

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
    if (cardId === 1) {
      setSelection({ ...selection, grind: "Wholebean" });
    } else if (cardId === 2) {
      setSelection({ ...selection, grind: "Filter" });
    } else {
      setSelection({ ...selection, grind: "Cafetiere" });
    }
  };

  const handleVisibility = () => {
    if (selection.preference === "Capsules") {
      setIsExpanded(false);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <SelectionContainer>
      <HeadingWrapper
        className={selection.preference === "Capsules" ? "disabled" : ""}
      >
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
