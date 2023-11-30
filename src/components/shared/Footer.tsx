import styled from "styled-components";
import {
  block,
  flexColumnToRowD,
  flexColumnToRowT,
} from "../../styles/styles.utilities";
import { NavItem } from "./NavBar";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import logo from "../../images/logo-light.svg";

const FooterWrapper = styled.footer`
  ${block}
  ${flexColumnToRowD}
  box-sizing: border-box;
  background: #2c343e;
  align-items: center;
  padding: 5.4rem 0;
  margin: 12rem auto 0;

  @media screen and (min-width: 768px) {
    margin: 14.4rem auto 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 4.7rem 8.5rem;
    margin: 20rem auto 0;
  }
`;

const NavList = styled.ul`
  ${flexColumnToRowT}
  gap: 2.4rem;
  text-align: center;
  padding: 0;
  list-style: none;
  margin: 4.85rem auto;

  @media screen and (min-width: 768px) {
    gap: 3.3rem;
    text-align: left;
    margin: 3.2rem auto 6.5rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 0 7rem;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 0 0 10.3rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media screen and (min-width: 1024px) {
    margin-left: auto;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={logo} alt="Coffee Roasters logo" />
      <NavList>
        <NavItem className="footer" to="/">
          Home
        </NavItem>
        <NavItem className="footer" to="/about-us">
          About us
        </NavItem>
        <NavItem className="footer" to="/create-plan">
          Create your plan
        </NavItem>
      </NavList>
      <IconWrapper>
        <img src={facebook} alt="Facebook icon" />
        <img src={instagram} alt="Instagram icon" />
        <img src={twitter} alt="Twitter icon" />
      </IconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
