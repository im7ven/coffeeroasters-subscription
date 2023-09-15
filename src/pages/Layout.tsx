import { Outlet } from "react-router-dom";
import { GlobalStyles, PagePadding } from "../styles/styles.global";

export const Layout = () => {
  return (
    <PagePadding>
      <GlobalStyles />
      <main>
        <Outlet />
      </main>
    </PagePadding>
  );
};
