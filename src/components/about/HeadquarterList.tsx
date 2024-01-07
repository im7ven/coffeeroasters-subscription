import styled from "styled-components";
import { h3, listText } from "../../styles/styles.typography";
import { darkGreyBlue } from "../../styles/styles.utilities";

const ListWrapper = styled.article`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const CountryHeading = styled.h3`
  ${h3}
  ${darkGreyBlue}
  margin: 4.7rem 0 2.2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3.2rem;
    margin: 4.5rem 0 2.4rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  ${listText}
`;

interface Props {
  icon: string;
  country: string;
  address: string;
  city: string;
  zip: string;
  number: string;
}

const HeadquarterList = ({ ...data }: Props) => {
  return (
    <ListWrapper>
      <img src={data.icon} />
      <CountryHeading>{data.country}</CountryHeading>
      <List>
        <ListItem>{data.address}</ListItem>
        <ListItem>{data.city}</ListItem>
        <ListItem>{data.zip}</ListItem>
        <ListItem>{data.number}</ListItem>
      </List>
    </ListWrapper>
  );
};

export default HeadquarterList;
