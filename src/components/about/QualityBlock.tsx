import styled from "styled-components";

const QualityContainer = styled.section`
  margin-top: 19.8rem;
  display: flex;

  @media screen and (min-width: 768px) {
    margin-top: 30rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 25rem;
  }
`;

const QualityBlock = () => {
  return <QualityContainer></QualityContainer>;
};

export default QualityBlock;
