import styled from "styled-components";
import {
  block,
  borderRadius,
  darkGreyBlueBg,
  flexColumnToRowD,
} from "../../styles/styles.utilities";
import desktopImg from "../../images/about/desktop/image-quality.jpg";
import tabletImg from "../../images/about/tablet/image-quality.jpg";
import mobileImg from "../../images/about/mobile/image-quality.jpg";
import { BodyText, h2 } from "../../styles/styles.typography";

const QualityContainer = styled.section`
  ${borderRadius}
  ${darkGreyBlueBg}
  ${flexColumnToRowD}
  ${block}
  box-sizing: border-box;
  margin-top: 19.8rem;
  position: relative;
  padding: 0 2.2rem 6.1rem;

  @media screen and (min-width: 580px) {
    margin-top: 25rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: 30rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 25rem;
    padding: 0 8.5rem;
    align-items: center;
    gap: 12.5rem;
  }
`;

const ImgWrapper = styled.picture`
  transform: translateY(-50%);
  position: absolute;
  left: 0%;
  right: 0%;
  padding: 0 2.2rem;

  @media screen and (min-width: 1024px) {
    position: initial;
    transform: none;
    order: 1;
    padding: 0;
  }
`;

const QualityImg = styled.img`
  ${borderRadius}
  width: 100%;
  max-width: 58rem;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    transform: translatey(-7.6rem);
    min-width: 35rem;
  }
`;

const QualityDetails = styled.div`
  text-align: center;
  // flex-grow: 1;
  margin-top: 10rem;

  @media screen and (min-width: 400px) {
    margin-top: 15rem;
  }

  @media screen and (min-width: 550px) {
    margin-top: 20rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 54rem;
    margin: 0;
    order: 0;
    text-align: left;
  }
`;

const QualityHeading = styled.h2`
  ${h2}
  margin-top: 0;
`;

const QualityBlock = () => {
  return (
    <QualityContainer>
      <ImgWrapper style={{}}>
        <source
          srcSet={tabletImg}
          media="(min-width: 480px) and (max-width: 1024px)"
        />
        <source srcSet={mobileImg} media="(max-width: 480px)" />
        <QualityImg src={desktopImg} />
      </ImgWrapper>
      <QualityDetails>
        <QualityHeading>Uncompromising quality</QualityHeading>
        <BodyText>
          Although we work with rowers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number, Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </BodyText>
      </QualityDetails>
    </QualityContainer>
  );
};

export default QualityBlock;
