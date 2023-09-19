import { Outlet } from "react-router-dom";
import { GlobalStyles, PagePadding } from "../styles/styles.global";
import { NavBar } from "../components/shared/NavBar";

export const Layout = () => {
  return (
    <PagePadding>
      <GlobalStyles />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </PagePadding>
  );
};
