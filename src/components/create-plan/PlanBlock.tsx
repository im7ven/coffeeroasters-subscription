import styled, { css } from "styled-components";
import {
  PrimaryBtn,
  block,
  darkCyan,
  darkGreyBlue,
  grey,
} from "../../styles/styles.utilities";
import BeanTypeBlock from "./BeanTypeBlock";
import DeliveryBlock from "./DeliveryBlock";
import GrindOptionBlock from "./GrindOptionBlock";
import PreferenceBlock from "./PreferenceBlock";
import QualityBlock from "./QuantityBlock";
import OrderSummary from "./OrderSummary";
import { useSelection } from "../../context/SelectionCardContect";

const PlanBlockContainer = styled.div`
  ${block}
  margin-top: 10.9rem;

  @media screen and (min-width: 768px) {
    margin-top: 14.4rem;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 46.5rem 1fr;
    grid-template-rows: auto;
    margin-top: 16.8rem;
  }
`;

const SelectionProgressionWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding-left: 8.5rem;
    grid-row: span 7;
  }
`;

const ProgressState = styled.div`
  display: flex;
  gap: 2.85rem;
  max-width: 25.5rem;
  border-bottom: 1px solid #cecece;

  &.last-phase {
    border: 0;
  }
`;

const progressLabel = css`
  font-family: Fraunces, serif;
  font-weight: 900;
  font-size: 2.4rem;
  line-height: 3.2rem;
`;

const ProgressNumber = styled.p`
  ${progressLabel}
  ${grey}
  opacity: .7;

  &.step-one {
    ${darkCyan}
    opacity: .7;
  }

  &.step-one-active {
    ${darkCyan}
    opacity: 1;
  }

  &.active {
    opacity: 1;
    ${grey}
  }

  &.disabled {
    opacity: 0.4;
  }
`;

const ProgressPhase = styled.p`
  ${progressLabel}
  ${grey}
  opacity: .7;

  &.active-phase {
    ${darkGreyBlue}
  }

  &.disabled {
    opacity: 0.4;
  }
`;

const PlanBlock = () => {
  const { selection, shipmentPrice } = useSelection();

  const handleCalculate = () => {
    console.log(
      (shipmentPrice.increment * shipmentPrice.incrementMultiplier +
        shipmentPrice.base) *
        shipmentPrice.multiplier
    );
  };

  return (
    <PlanBlockContainer>
      <SelectionProgressionWrapper>
        <ProgressState>
          <ProgressNumber className="step-one">01</ProgressNumber>
          <ProgressPhase>Preferences</ProgressPhase>
        </ProgressState>
        <ProgressState>
          <ProgressNumber>02</ProgressNumber>
          <ProgressPhase>Bean Type</ProgressPhase>
        </ProgressState>
        <ProgressState>
          <ProgressNumber>03</ProgressNumber>
          <ProgressPhase>Quantity</ProgressPhase>
        </ProgressState>
        <ProgressState>
          <ProgressNumber
            className={selection.preference === "Capsules" ? "disabled" : ""}
          >
            04
          </ProgressNumber>
          <ProgressPhase
            className={selection.preference === "Capsules" ? "disabled" : ""}
          >
            Grind Option
          </ProgressPhase>
        </ProgressState>
        <ProgressState className="last-phase">
          <ProgressNumber>05</ProgressNumber>
          <ProgressPhase>Deliveries</ProgressPhase>
        </ProgressState>
      </SelectionProgressionWrapper>
      <PreferenceBlock />
      <BeanTypeBlock />
      <QualityBlock />
      <GrindOptionBlock />
      <DeliveryBlock />
      <OrderSummary {...selection} />
      <PrimaryBtn className="plan" to="/about-us">
        create my plan!
      </PrimaryBtn>
      <button onClick={() => handleCalculate()}>Calculate Total</button>
    </PlanBlockContainer>
  );
};

export default PlanBlock;
