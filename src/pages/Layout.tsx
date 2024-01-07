import { Outlet } from "react-router-dom";
import { GlobalStyles, PagePadding } from "../styles/styles.global";
import { NavBar } from "../components/shared/NavBar";
import { Menu } from "../components/shared/Menu";
import { useState } from "react";
import Footer from "../components/shared/Footer";

export const Layout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <PagePadding>
      <GlobalStyles />
      <NavBar isVisible={isMenuVisible} toggleMenu={handleMenuVisibility} />
      <Menu toggleMenu={handleMenuVisibility} isVisible={isMenuVisible} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </PagePadding>
  );
};
