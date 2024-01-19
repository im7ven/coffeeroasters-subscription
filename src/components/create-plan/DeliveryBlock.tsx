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

const DeliveryBlock = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { selection, setSelection, shipmentPrice, setShipmentPrice } =
    useSelection();

  const handleActivation = (cardId: number) => {
    setActiveCard(cardId);
    if (cardId === 1) {
      setSelection({ ...selection, delivery: "Every week" });
      setShipmentPrice({
        ...shipmentPrice,
        multiplier: 4,
        incrementMultiplier: 0,
      });
    } else if (cardId === 2) {
      setSelection({ ...selection, delivery: "Every 2 weeks" });
      setShipmentPrice({
        ...shipmentPrice,
        multiplier: 2,
        incrementMultiplier: 1,
      });
    } else {
      setSelection({ ...selection, delivery: "Every month" });
      setShipmentPrice({
        ...shipmentPrice,
        multiplier: 1,
        incrementMultiplier: 2,
      });
    }
  };

  const handleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SelectionContainer>
      <HeadingWrapper>
        <BlockHeading>How often should we deliver?</BlockHeading>
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
            {selection.quantity === "_____" ||
              (selection.quantity === "250g" && "$7.20 ")}
            {selection.quantity === "500g" && "$13.00 "}
            {selection.quantity === "1000g" && "$22.00 "}
            per shipment. Includes free first-class shipping
          </SelectionCard>
          <SelectionCard
            cardHeading="Every 2 weeks"
            cardId={2}
            onActive={handleActivation}
            isActive={activeCard === 2}
          >
            {selection.quantity === "_____" ||
              (selection.quantity === "250g" && "$9.60 ")}
            {selection.quantity === "500g" && "$17.50 "}
            {selection.quantity === "1000g" && "$32.00 "}
            per shipment. Includes free priority shipping
          </SelectionCard>
          <SelectionCard
            cardHeading="Every month"
            cardId={3}
            onActive={handleActivation}
            isActive={activeCard === 3}
          >
            {selection.quantity === "_____" ||
              (selection.quantity === "250g" && "$12.00 ")}
            {selection.quantity === "500g" && "$22.00 "}
            {selection.quantity === "1000g" && "$42.00 "}
            per shipment. Includes free priority shipping
          </SelectionCard>
        </CardWrapper>
      )}
    </SelectionContainer>
  );
};

export default DeliveryBlock;
