import styled from "styled-components";
import { PrimaryBtn, block } from "../../styles/styles.utilities";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 7.9rem auto 0;
  max-width: 105.4rem;

  @media screen and (min-width: 768px) {
    margin: 4.4rem auto 0;
    max-width: 72rem;
    justify-content: start;
  }

  @media screen and (min-width: 1024px) {
    margin: 6.4rem auto 0;
    max-width: 105.4rem;
  }
`;

const CreatePlanBtn = () => {
  return (
    <ButtonWrapper>
      <PrimaryBtn style={{}} to={"/create-plan"}>
        Create your plan
      </PrimaryBtn>
    </ButtonWrapper>
  );
};

export default CreatePlanBtn;
