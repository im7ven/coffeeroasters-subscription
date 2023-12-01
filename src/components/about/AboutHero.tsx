import styled from "styled-components";
import { block, borderRadius } from "../../styles/styles.utilities";
import heroDesktop from "../../images/about/desktop/image-hero-whitecup.jpg";
import heroTablet from "../../images/about/tablet/image-hero-whitecup.jpg";
import heroMobile from "../../images/about/mobile/image-hero-whitecup.jpg";
import { BodyText, h2 } from "../../styles/styles.typography";

const HeroContainer = styled.section`
  ${block}
  ${borderRadius}
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 0 2.4rem;
  height: 40rem;
  display: grid;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    padding: 0 5.8rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 8.5rem;
    height: 45rem;
  }
`;

const HeroImg = styled.img`
  height: 40rem;
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    height: 45rem;
    object-fit: cover;
  }
`;

const H2 = styled.h2`
  ${h2}
  margin: 0 0 2.4rem 0;
`;

const HeroContent = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const BodyWrapper = styled.div`
  max-width: 40rem;

  @media screen and (min-width: 1024px) {
    max-width: 44.5rem;
  }
`;

const AboutHero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <picture>
          <source
            srcSet={heroTablet}
            media="(min-width: 480px) and (max-width: 1024px)"
          />
          <source srcSet={heroMobile} media="(max-width: 480px)" />
          <HeroImg src={heroDesktop} alt="Coffee in white cup" />
        </picture>
        <H2>About Us</H2>
        <BodyWrapper>
          <BodyText>
            Coffeeroasters began its journey of exotic discovery in 1989,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </BodyText>
        </BodyWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default AboutHero;
