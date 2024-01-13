import styled from "styled-components";
import { h4, selectionCardInfo } from "../../styles/styles.typography";
import {
  borderRadius,
  lightGreyBg,
  paleOrangeBg,
  darkCyanBg,
  darkGreyBlue,
} from "../../styles/styles.utilities";

const CardContainer = styled.div`
  ${borderRadius}
  ${lightGreyBg}
  padding: 2.4rem 2.5rem;
  cursor: pointer;

  &:hover {
    ${paleOrangeBg}
  }

  &.active {
    ${darkCyanBg}
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    height: 25rem;
    padding: 0 2.45rem;
  }
`;

const CardHeading = styled.h4`
  ${h4}
  ${darkGreyBlue}
  margin: 0 0 .8rem 0;

  &.active {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    margin: 3.2rem 0 2.4rem;
  }
`;

const CardDescription = styled.p`
  ${selectionCardInfo}
  ${darkGreyBlue}
  margin: 0;

  &.active {
    color: #fff;
  }
`;

interface Props {
  cardId: number;
  cardHeading: string;
  children: string;
  onActive: (cardId: number) => void;
  isActive: boolean;
}

const SelectionCard = ({
  cardId,
  onActive,
  cardHeading,
  children,
  isActive,
}: Props) => {
  return (
    <CardContainer
      className={isActive ? "active" : ""}
      onClick={() => onActive(cardId)}
    >
      <CardHeading className={isActive ? "active" : ""}>
        {cardHeading}
      </CardHeading>
      <CardDescription className={isActive ? "active" : ""}>
        {children}
      </CardDescription>
    </CardContainer>
  );
};

export default SelectionCard;
