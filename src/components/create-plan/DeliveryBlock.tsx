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

const DeliveryBlock = () => {
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
            cardHeading="Every week "
            cardId={1}
            onActive={handleActivation}
            isActive={activeCard === 1}
          >
            $7.20 per shipment. Includes free first-class shipping
          </SelectionCard>
          <SelectionCard
            cardHeading="Every 2 weeks"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            $9.60 per shipment. Includes free priority shipping
          </SelectionCard>
          <SelectionCard
            cardHeading="Every month"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            $12.00 per shipment. Includes free priority shipping
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default DeliveryBlock;
