import styled from "styled-components";
import { darkCyan, darkGreyBlueBg } from "../../styles/styles.utilities";
import { h4 } from "../../styles/styles.typography";
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
`;

interface Props {
  preference: string;
  bean: string;
  quantity: string;
  grind: string;
  delivery: string;
}

const OrderSummary = ({ ...order }: Props) => {
  const { selection } = useSelection();
  return (
    <SummaryContainer>
      <SummaryHeading>Order summary</SummaryHeading>
      <SummaryDetails>
        "I drink my coffee
        {selection.preference === "Capsules" && " using "}
        {selection.preference === "Filter" && " as "}
        {selection.preference === "Espresso" && " as "}
        <SummaryDetails className="selection">
          {` ${order.preference} `}
        </SummaryDetails>
        with a
        <SummaryDetails className="selection">{` ${order.bean} `}</SummaryDetails>
        type of bean.
        <SummaryDetails className="selection">{` ${order.quantity} `}</SummaryDetails>
        {selection.preference !== "Capsules" && (
          <SummaryDetails className="selection">{` ${order.grind} `}</SummaryDetails>
        )}
        , sent to me
        <SummaryDetails className="selection">{`
        ${order.delivery}`}</SummaryDetails>
        ."
      </SummaryDetails>
    </SummaryContainer>
  );
};

export default OrderSummary;
