import styled from "styled-components";
import coffeeBean from "../../images/home/desktop/icon-coffee-bean.svg";
import gift from "../../images/home/desktop/icon-gift.svg";
import truck from "../../images/home/desktop/icon-truck.svg";
import { block, borderRadius } from "../../styles/styles.utilities";
import { FeatureCard } from "./FeatureCard";
import { BodyText, h2 } from "../../styles/styles.typography";

const FeatureWrapper = styled.section`
  ${block}
  ${borderRadius}
  background: #2C343E;
  padding: 6.4rem 2.4rem 0;
  height: 90.2rem;
  box-sizing: border-box;
  margin-top: 12rem;

  @media screen and (min-width: 768px) {
    height: 57.4rem;
    padding: 7.1rem 2.4rem 0;
    margin-top: 14.4rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 10rem 2.4rem 0;
    height: 57.8rem;
    margin-top: 20.4rem;
  }
`;

const FeatureBlockHeading = styled.h2`
  ${h2}
  text-align: center;
  margin: 0 0 2.4rem;

  @media screen and (min-width: 1200px) {
    margin: 0 0 3.2rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  margin-top: 6.4rem;

  @media screen and (min-width: 768px) {
    margin-top: 7rem;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    margin-top: 8.6rem;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  max-width: 54rem;
  margin: 0 auto;
`;

export const FeatureBlock = () => {
  return (
    <FeatureWrapper>
      <FeatureBlockHeading>Why choose us?</FeatureBlockHeading>
      <TextWrapper>
        <BodyText>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to five you a more impactful experience on every level.
        </BodyText>
      </TextWrapper>
      <CardsWrapper>
        <FeatureCard
          heading="Best quality"
          imageSrc={coffeeBean}
          alt="Coffee bean"
        >
          Discover an endless variety of the world's best artisan coffee from
          each of our roasters.
        </FeatureCard>
        <FeatureCard heading="Exclusive benefits" imageSrc={gift} alt="Present">
          Special offers and swag when you subscribe, including 30% off your
          first shipment.
        </FeatureCard>
        <FeatureCard heading="Free shipping" imageSrc={truck} alt="Truck">
          We cover the cost and coffee is delivered fast. Peak freshness:
          guaranteed.
        </FeatureCard>
      </CardsWrapper>
    </FeatureWrapper>
  );
};
