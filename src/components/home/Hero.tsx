import styled from "styled-components";
import { PrimaryBtn, block, borderRadius } from "../../styles/styles.utilities";
import heroDesktop from "../../images/home/desktop/image-hero-coffeepress.jpg";
import heroTablet from "../../images/home/tablet/image-hero-coffeepress.jpg";
import heroMobile from "../../images/home/mobile/image-hero-coffeepress.jpg";
import { BodyText, h1 } from "../../styles/styles.typography";

const HeroContainer = styled.section`
  ${borderRadius}
  ${block}
  box-sizing: border-box;
  display: grid;
  align-items: center;
  position: relative;
  height: 50rem;
  padding: 0 2.4rem;
  overflow: hidden;
  text-align: center;

  @media screen and (min-width: 520px) {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 5.8rem;
  }

  @media screen and (min-width: 1024px) {
    height: 60rem;
    padding: 0 8.6rem;
  }
`;

const HeroImg = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 50rem;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    height: 60rem;
  }
`;

const HeroContent = styled.div`
  max-width: 49.3rem;
`;

const H1 = styled.h1`
  ${h1}
  margin: 0 0 2.4rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 4.6rem;

  @media screen and (min-width: 768px) {
    margin-top: 5.6rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 6.1rem;
  }
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <picture>
          <source
            srcSet={heroTablet}
            media="(min-width: 480px) and (max-width: 1024px)"
          />
          <source srcSet={heroMobile} media="(max-width: 480px)" />
          <HeroImg loading="lazy" src={heroDesktop} alt="Coffee press" />
        </picture>
        <H1>Great coffee made simple.</H1>
        <BodyText style={{ maxWidth: "42rem" }}>
          Start your mornings with world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at you schedule.
        </BodyText>
        <ButtonWrapper>
          <PrimaryBtn to="/create-plan">Create your plan</PrimaryBtn>
        </ButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
