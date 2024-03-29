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

const QuantityBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { selection, setSelection, setShipmentPrice, shipmentPrice } =
    useSelection();

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
    if (cardId === 1) {
      setSelection({ ...selection, quantity: "250g" });
      setShipmentPrice({ ...shipmentPrice, base: 7.2, increment: 2.4 });
    } else if (cardId === 2) {
      setSelection({ ...selection, quantity: "500g" });
      setShipmentPrice({ ...shipmentPrice, base: 13.0, increment: 4.5 });
    } else {
      setSelection({ ...selection, quantity: "1000g" });
      setShipmentPrice({ ...shipmentPrice, base: 22.0, increment: 10 });
    }
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
            cardHeading="250g"
            cardId={1}
            onActive={handleActivation}
            isActive={activeCard === 1}
          >
            Perfect for the solo drinker. Yields about 12 delicious cups
          </SelectionCard>

          <SelectionCard
            cardHeading="500g"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            Perfect option for a couple. Yields about 40 delectable cups
          </SelectionCard>
          <SelectionCard
            cardHeading="1000g"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            Perfect for offices and events. Yields about 90 delightful cups
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default QuantityBlock;
