import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import CreatePlanPage from "./pages/CreatePlanPage";
import ScrollToTop from "./components/shared/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/create-plan", element: <CreatePlanPage /> },
    ],
  },
]);

export default router;
