import { ReactNode } from "react";
import styled from "styled-components";
import { baseFont } from "../../styles/styles.typography";

const CollectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 111.1rem;
  margin: 12rem auto 3.5rem;
  gap: 4.3rem;

  @media screen and (min-width: 768px) {
    margin: 14.4rem auto 0;
    gap: 4.7rem;
  }

  @media screen and (min-width: 1240px) {
    margin: 26.2rem auto 0;
    gap: 4.7rem;
    flex-direction: row;
  }
`;

const CollectionHeading = styled.h2`
  ${baseFont}
  z-index: -1;
  text-align: center;
  font-size: 4.2rem;
  background: -webkit-linear-gradient(
    270deg,
    rgba(151, 151, 151, 0.7) 20%,
    rgba(255, 255, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 3.5rem;

  @media screen and (min-width: 500px) {
    font-size: 6rem;
  }

  @media screen and (min-width: 768px) {
    letter-spacing: 0.35rem;
    position: absolute;
    top: -9%;
    font-size: 10.5rem;
    background: -webkit-linear-gradient(
      270deg,
      rgba(151, 151, 151, 0.7) 0%,
      rgba(255, 255, 255, 1) 85%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 1240px) {
    font-size: 17.5rem;
    letter-spacing: 0.5rem;
    top: -32%;
  }
`;

interface Props {
  children: ReactNode;
}

export const CoffeeCollection = ({ children }: Props) => {
  return (
    <CollectionWrapper>
      <CollectionHeading>our collection</CollectionHeading>
      {children}
    </CollectionWrapper>
  );
};
