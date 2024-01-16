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

const PreferenceBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const { selection, setSelection } = useSelection();

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
    if (cardId === 1) {
      setSelection({ ...selection, preference: "Capsules" });
    } else if (cardId === 2) {
      setSelection({ ...selection, preference: "Filter" });
    } else {
      setSelection({ ...selection, preference: "Espresso" });
    }
  };

  const handleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(selection);
  console.log(activeCard);

  return (
    <SelectionContainer>
      <HeadingWrapper>
        <BlockHeading>How do you drink your coffee?</BlockHeading>
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
            cardHeading="Filter"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            For pour over or drip methods like Aeropress, Chemex, and V60
          </SelectionCard>
          <SelectionCard
            cardHeading="Espresso"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            Dense and finely ground beans for an intense, flavorful experience
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default PreferenceBlock;
