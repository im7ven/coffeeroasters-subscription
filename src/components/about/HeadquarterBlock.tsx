import styled from "styled-components";
import { grey } from "../../styles/styles.utilities";
import { h4 } from "../../styles/styles.typography";
import data from "./HeadquaterData";
import HeadquarterList from "./HeadquarterList";

const HeadquarterBlockContainer = styled.section`
  max-width: 104.5rem;
  margin: 12rem auto 0;

  @media screen and (min-width: 768px) {
    margin: 14.4rem auto 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 16.8rem auto 0;
  }
`;

const HeadquarterWrapper = styled.div`
  display: grid;
  gap: 8rem;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
`;

const BlockHeading = styled.h4`
  ${h4}
  ${grey}
  text-align: center;
  margin-bottom: 7.2rem;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const HeadquarterBlock = () => {
  return (
    <HeadquarterBlockContainer>
      <BlockHeading>Our headquarters</BlockHeading>
      <HeadquarterWrapper>
        {data.map((headquarter, index) => (
          <HeadquarterList key={index} {...headquarter} />
        ))}
      </HeadquarterWrapper>
    </HeadquarterBlockContainer>
  );
};

export default HeadquarterBlock;
