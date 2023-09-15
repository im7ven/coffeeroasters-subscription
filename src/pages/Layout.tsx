import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/styles.global";

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Outlet />
      </main>
    </>
  );
};
