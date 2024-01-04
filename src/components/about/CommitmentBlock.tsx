import styled from "styled-components";
import { block } from "../../styles/styles.utilities";

const CommitmentContainer = styled.section`
  ${block}
  display: grid;
`;

const CommitmentBlock = () => {
  return <CommitmentContainer></CommitmentContainer>;
};

export default CommitmentBlock;
