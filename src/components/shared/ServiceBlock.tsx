import styled from "styled-components";
import {
  block,
  borderRadius,
  flexColumnToRowT,
  grey,
  paleOrangeBg,
} from "../../styles/styles.utilities";
import { ReactNode } from "react";
import { h4 } from "../../styles/styles.typography";
import { ServiceCard } from "./ServiceCard";

const ServiceContainer = styled.section`
  ${borderRadius}
  ${block}
  margin: 71.1rem auto 0;

  @media screen and (min-width: 768px) {
    margin: 43.4rem auto 0;
  }

  @media screen and (min-width: 1200px) {
    margin: 35.1rem auto 0;
  }

  &.plan {
    background-color: #2c343e;
    padding: 7.95rem 2.4rem;
    margin: 12rem auto 0;

    @media screen and (min-width: 768px) {
      padding: 9.65rem 4rem;
      margin: 14.4rem auto 0;
    }
    @media screen and (min-width: 768px) {
      padding: 10rem 8.5rem;
      margin: 16.8rem auto 0;
    }
  }
`;

const ServiceHeading = styled.h2`
  ${h4}
  ${grey}
  margin: 0 0 8rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 0 0 4rem;
    text-align: left;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 8rem;
  }
`;

const GuideWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 49rem;
    height: 3.1rem;
    position: relative;
    margin-bottom: 4.8rem;
  }
  @media screen and (min-width: 1024px) {
    width: 77.9rem;
    margin-bottom: 6.7rem;
  }
`;

const GuideMarks = styled.div`
  // display: none;

  &.plan {
    background: 0;
  }

  @media screen and (min-width: 768px) {
    width: 3.1rem;
    border-radius: 50%;
    border: 1px solid #0e8784;
    background: #fff;
    display: block;
  }
`;

const GuideLine = styled.div`
  &.plan {
    z-index: 1;
    left: 2%;
  }

  @media screen and (min-width: 768px) {
    ${paleOrangeBg}
    width: 47rem;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: -1;
    display: block;
  }

  @media screen and (min-width: 1024px) {
    width: 75rem;
  }
`;

const HeadingGuideWrapper = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 100rem;
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 0 0 12.5rem;
  }
`;

const ServiceCardWrapper = styled.div`
  ${flexColumnToRowT}
  gap: 5.6rem;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 9.5rem;
    max-width: 105.4rem;
    margin: 0 auto;
  }
`;

interface Props {
  blockHeading?: string;
  button?: ReactNode;
  theme?: string;
}

export const ServiceBlock = ({ blockHeading, button, theme }: Props) => {
  return (
    <ServiceContainer className={theme}>
      <HeadingGuideWrapper>
        <ServiceHeading>{blockHeading}</ServiceHeading>
        <GuideWrapper>
          <GuideMarks className={theme} />
          <GuideMarks className={theme} />
          <GuideMarks className={theme} />
          <GuideLine className={theme} />
        </GuideWrapper>
      </HeadingGuideWrapper>
      <ServiceCardWrapper>
        <ServiceCard theme={theme} heading="Pick your coffee" number="01">
          Select from our evolving range of artisan coffees. Our beans are
          ethically sourced and we pay fair prices for them. There are new
          coffees in all profiles every month for you to try out.
        </ServiceCard>
        <ServiceCard theme={theme} heading="Choose the frequency" number="02">
          Customize your order frequency, quantity, even your roast style and
          grind type. Pause, skip or cancel your subscription with no commitment
          through our online portal.
        </ServiceCard>
        <ServiceCard theme={theme} heading="Receive and enjoy!" number="03">
          We ship your package within 48 hours, freshly roasted. Sit back and
          enjoy award-winning world-class coffees curated to provide a distinct
          tasting experience.
        </ServiceCard>
      </ServiceCardWrapper>
      {button}
    </ServiceContainer>
  );
};
