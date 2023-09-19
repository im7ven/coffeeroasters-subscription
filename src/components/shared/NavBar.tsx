import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburgerIcon from "../../../public/images/icon-hamburger.svg";
import logo from "../../../public/images/logo.svg";
import { block, darkGreyBlue } from "../../styles/styles.utilities";

const Nav = styled.nav`
  ${block}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  width: 16.3rem;
  height: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 23.7rem;
    height: 2.6rem;
  }
`;

const MenuBtn = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 3.3rem;
    padding: 0;
    list-style: none;
  }
`;

export const NavItem = styled(Link)`
  ${darkGreyBlue}
  font-family: Barlow, sans-serif;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.92px;
  text-transform: uppercase;
`;

export const NavBar = () => {
  return (
    <Nav>
      <Logo src={logo} alt="Logo" />
      <Link to="/">
        <MenuBtn src={hamburgerIcon} alt="Hamburger menu icon" />
      </Link>
      <NavList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="about-us">About Us</NavItem>
        <NavItem to="create-plan">Create Your Plan</NavItem>
      </NavList>
    </Nav>
  );
};