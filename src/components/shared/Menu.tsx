import styled from "styled-components";
import { baseFont } from "../../styles/styles.typography";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  height: 50vh;
  width: 100%;
  justify-content: center;
  background: #fff;
  z-index: 77;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &.not-visible {
    display: none;
  }
`;

const MenuContainer = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  width: 100%;
  margin-top: 8rem;
  z-index: 57;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled(Link)`
  ${baseFont}
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: #333d4b;
  text-align: center;
  text-decoration: none;
`;

interface Props {
  isVisible: boolean;
}

export const Menu = ({ isVisible }: Props) => {
  return (
    <MenuWrapper className={isVisible ? "" : "not-visible"}>
      <MenuContainer>
        <MenuList>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="about-us"> About Us</MenuItem>
          <MenuItem to="create-plan">Create Your Plan</MenuItem>
        </MenuList>
      </MenuContainer>
    </MenuWrapper>
  );
};
