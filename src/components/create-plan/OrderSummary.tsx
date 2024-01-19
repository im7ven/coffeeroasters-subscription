import styled from "styled-components";
import { darkCyan, darkGreyBlueBg, grey } from "../../styles/styles.utilities";
import { h4, selectionText } from "../../styles/styles.typography";
import { useSelection } from "../../context/SelectionCardContect";

const SummaryContainer = styled.article`
  ${darkGreyBlueBg}
  padding: 3.2rem 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 2.7rem 4.4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2.7rem 6.4rem;
  }

  &.modal {
    background: #fff;
    padding: 1rem 0;
  }
`;

const SummaryHeading = styled.p`
  text-transform: uppercase;
  color: #fff;
  opacity: 0.5;
  font-size: 1.6rem;
  font-family: Barlow, sans-serif;
`;

const SummaryDetails = styled.p`
  ${h4}
  margin: 0;

  &.selection {
    ${darkCyan}
    display: inline;
  }

  &.modal {
    ${grey}
  }
`;

const SummarySelection = styled.span`
  ${selectionText}
`;

interface Props {
  preference: string;
  bean: string;
  quantity: string;
  grind: string;
  delivery: string;
  heading?: string;
  theme?: string;
}

const OrderSummary = ({ ...order }: Props) => {
  const { selection } = useSelection();
  return (
    <SummaryContainer className={order.theme}>
      <SummaryHeading>{order.heading}</SummaryHeading>
      <SummaryDetails className={order.theme}>
        "I drink my coffee
        {selection.preference === "Capsules" && " using "}
        {selection.preference === "Filter" && " as "}
        {selection.preference === "Espresso" && " as "}
        <SummarySelection>{` ${order.preference} `}</SummarySelection>
        with a<SummarySelection>{` ${order.bean} `}</SummarySelection>
        type of bean.
        <SummarySelection>{` ${order.quantity} `}</SummarySelection>
        {selection.preference !== "Capsules" && (
          <SummarySelection>{` ${order.grind} `}</SummarySelection>
        )}
        , sent to me
        <SummarySelection>{`
        ${order.delivery}`}</SummarySelection>
        ."
      </SummaryDetails>
    </SummaryContainer>
  );
};

export default OrderSummary;
