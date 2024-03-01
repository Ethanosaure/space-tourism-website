import Home from "../pages/Home";
import Crew from "../pages/Crew";
import Destination from "../pages/Destination";
import Technology from "../pages/Technology";
import ErrorPage from "../pages/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

export default router;
