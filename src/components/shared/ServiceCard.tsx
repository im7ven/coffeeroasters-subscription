import styled from "styled-components";
import { BodyText, baseFont, h3 } from "../../styles/styles.typography";
import { paleOrange } from "../../styles/styles.utilities";
import { ReactNode } from "react";

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 2.4rem;

  @media screen and (min-width: 768px) {
    text-align: left;
    align-items: start;
  }
`;

const CardNumber = styled.p`
  ${baseFont}
  ${paleOrange}
  font-size: 7.2rem;
  margin: 0;
`;

const CardHeading = styled.h3`
  ${h3}
  margin:0;

  @media screen and (min-width: 768px) {
    max-width: 23rem;
  }
`;

const DescriptionWrapper = styled.div`
  max-width: 32.7rem;

  @media screen and (min-width: 768px) {
    max-width: 22.3rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 28.5rem;
  }
`;

interface Props {
  number: string;
  heading: ReactNode;
  children: string;
}

export const ServiceCard = ({ number, heading, children }: Props) => {
  return (
    <CardContainer>
      <CardNumber>{number}</CardNumber>
      <CardHeading>{heading}</CardHeading>
      <DescriptionWrapper>
        <BodyText className="black">{children}</BodyText>
      </DescriptionWrapper>
    </CardContainer>
  );
};
