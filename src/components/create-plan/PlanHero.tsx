import styled from "styled-components";
import { block, borderRadius } from "../../styles/styles.utilities";
import desktopImg from "../../images/plan/desktop/image-hero-blackcup.jpg";
import tabletImg from "../../images/plan/tablet/image-hero-blackcup.jpg";
import mobileImg from "../../images/plan/mobile/image-hero-blackcup.jpg";
import { BodyText, h1 } from "../../styles/styles.typography";

const HeroContainer = styled.section`
  ${borderRadius}
  ${block}
  overflow: hidden;
  display: grid;
  align-items: center;
  position: relative;
  height: 40rem;
  padding: 0 2.4rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    padding: 0 5.8rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 8.6rem;
    height: 45rem;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40rem;
  object-fit: cover;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    height: 45rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 44rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 39rem;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    max-width: 48.5rem;
  }
`;

const HeroHeading = styled.h1`
  ${h1}
  margin: 0 0 2.2rem;

  @media screen and (min-width: 768px) {
    margin: 0 0 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 3.2rem;
  }
`;

const PlanHero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <picture>
          <source
            srcSet={tabletImg}
            media="(min-width: 768px) and (max-width: 1024px)"
          />
          <source srcSet={mobileImg} media="(max-width: 768px)" />
          <HeroImg src={desktopImg} alt="Cup of coffee" />
        </picture>
        <HeroHeading>Create a plan</HeroHeading>
        <BodyText>
          Build a subscription plan that best fits you needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </BodyText>
      </HeroContent>
    </HeroContainer>
  );
};

export default PlanHero;
