import styled from "styled-components";
import { BodyText, h4 } from "../../styles/styles.typography";
import { darkGreyBlue, flexColumnToRowT } from "../../styles/styles.utilities";

const ProductContainer = styled.section`
  ${flexColumnToRowT}
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 111.1rem;

  @media screen and (min-width: 768px) {
    gap: 3.6rem;
    text-align: left;
    padding: 0 5.8rem;
    align-items: start;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 0;
  }
`;

const ProductImg = styled.img`
  margin: 0 7.7rem 0 9.7rem;
  max-width: 20rem;

  @media screen and (min-width: 768px) {
    max-width: 25.5rem;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    transform: translateX(4rem);
  }
`;

const ProductHeading = styled.h4`
  ${h4}
  ${darkGreyBlue}
  margin: 2.4rem 0 1.6rem;

  @media screen and (min-width: 768px) {
    margin: 1.3rem 0 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 7.15rem 0 2.4rem;
  }
`;

const ProductDescription = styled.div`
  max-width: 28.2rem;
`;

interface Props {
  heading: string;
  src: string;
  alt: string;
  children: string;
}

export const CoffeeProduct = ({ heading, src, alt, children }: Props) => {
  return (
    <ProductContainer>
      <ProductImg src={src} alt={alt} />
      <ProductDescription>
        <ProductHeading>{heading}</ProductHeading>
        <BodyText className="black">{children}</BodyText>
      </ProductDescription>
    </ProductContainer>
  );
};
