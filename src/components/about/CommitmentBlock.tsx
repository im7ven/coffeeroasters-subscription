import styled from "styled-components";
import {
  block,
  borderRadius,
  darkGreyBlue,
} from "../../styles/styles.utilities";
import desktopImg from "../../images/about/desktop/image-commitment.jpg";
import tabletImg from "../../images/about/tablet/image-commitment.jpg";
import mobileImg from "../../images/about/mobile/image-commitment.jpg";
import { BodyText, h2 } from "../../styles/styles.typography";

const CommitmentContainer = styled.section`
  ${block}
  display: grid;
  align-items: center;
  margin: 12rem auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: 6.9rem;
    margin: 14.4rem auto;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 2rem;
    margin: 17rem auto;
  }

  @media screen and (min-width: 1200px) {
    gap: 0;
  }
`;

const CommitmentImage = styled.img`
  ${borderRadius}
  width: 100%;
  max-width: 32.7rem;
  margin: 0 auto;
  display: block;

  @media screen and (min-width: 480px) {
    width: initial;
    max-width: initial;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const CommitmentDetails = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 54rem;
  }
`;

const CommitmentHeading = styled.h2`
  ${h2}
  ${darkGreyBlue}
  margin: 1rem 0 3rem;
`;

const CommitmentBlock = () => {
  return (
    <CommitmentContainer>
      <picture>
        <source
          srcSet={tabletImg}
          media="(min-width: 480px) and (max-width: 1024px)"
        />
        <source srcSet={mobileImg} media="(max-width: 480px)" />
        <CommitmentImage src={desktopImg} />
      </picture>
      <CommitmentDetails>
        <CommitmentHeading>Our Commitment</CommitmentHeading>
        <BodyText style={{ color: "#333d4b" }}>
          We're built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world's best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </BodyText>
      </CommitmentDetails>
    </CommitmentContainer>
  );
};

export default CommitmentBlock;
