import { MouseEventHandler, useRef } from "react";
import styled from "styled-components";
import { useSelection } from "../../context/SelectionCardContect";
import { BodyText, h2 } from "../../styles/styles.typography";
import {
  PrimaryBtn,
  borderRadius,
  darkGreyBlueBg,
  flexColumnToRowT,
} from "../../styles/styles.utilities";
import OrderSummary from "./OrderSummary";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 77;
  padding: 0 2.4rem;
`;

const ModalContainer = styled.section`
  ${borderRadius}
  background: #fff;
  max-width: 54rem;
`;

const ModalContent = styled.div`
  padding: 0 2.4rem 2.4rem;
`;

const HeadingWrapper = styled.div`
  ${darkGreyBlueBg}
  text-align: left;
  padding: 2.8rem 2.4rem;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

const ModalHeading = styled.h2`
  ${h2}
  margin: 0;
`;

const PriceWrapper = styled.div`
  ${flexColumnToRowT}
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;
  }
`;

const SubscriptionPrice = styled.p`
  color: #333d4b;
  font-family: "Fraunces", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 36px;
  text-align: center;
  margin: 1.5rem 0;
`;

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
}

const PlanModal = ({ isOpen, onCloseModal }: Props) => {
  const { selection, setShipmentPrice, shipmentPrice } = useSelection();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === overlayRef.current) {
      setShipmentPrice({ ...shipmentPrice, planTotal: 0 });
      return onCloseModal();
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
      <ModalContainer>
        <HeadingWrapper>
          <ModalHeading>Order Summary</ModalHeading>
        </HeadingWrapper>
        <ModalContent>
          <OrderSummary {...selection} theme="modal" />
          <BodyText className="black">
            Is this correct? You can proceed to checkout or go back to plan
            section if something is off. Subscription discount codes can also be
            redeemed at the checkout.
          </BodyText>
          <PriceWrapper>
            <SubscriptionPrice>{`$${shipmentPrice.planTotal.toFixed(
              2
            )}/ mo`}</SubscriptionPrice>
            <PrimaryBtn className="modal" to="/">
              Checkout
            </PrimaryBtn>
          </PriceWrapper>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PlanModal;
