import styled from "styled-components";
import {
  borderRadius,
  darkCyanBg,
  flexColumnToRowT,
} from "../../styles/styles.utilities";
import { BodyText, h4 } from "../../styles/styles.typography";
import { ReactNode } from "react";

const Card = styled.section`
  ${borderRadius}
  ${flexColumnToRowT}
  ${darkCyanBg}
  height: 38.2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 27.9rem;
  flex-shrink: 0;
  padding: 7.2rem 1.2rem 4.8rem;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    height: 18rem;
    max-width: 57.3rem;
    gap: 5.7rem;
    text-align: left;
    padding: 0 4.8rem 0 7.2rem;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    max-width: 35rem;
    height: 38.2rem;
    padding: 7.2rem 4.75rem 4.8rem;
    text-align: center;
  }
`;

const CardImage = styled.img`
  max-width: 7.2rem;
`;

const CardContent = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 34.4rem;
  }
`;

const CardHeading = styled.h3`
  ${h4}
  margin: 5.6rem 0 2.4rem;

  @media screen and (min-width: 768px) {
    margin: 4.1rem 0 1.6rem;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 0 2.4rem;
  }
`;

interface Props {
  imageSrc: string;
  alt: string;
  heading: string;
  children: ReactNode;
}

export const FeatureCard = ({ alt, imageSrc, heading, children }: Props) => {
  return (
    <Card>
      <CardImage src={imageSrc} alt={alt} />
      <CardContent>
        <CardHeading>{heading}</CardHeading>
        <BodyText>{children}</BodyText>
      </CardContent>
    </Card>
  );
};
