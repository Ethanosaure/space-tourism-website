import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Crew from "../pages/Crew";
import Destination from "../pages/Destination";
import Technology from "../pages/Technology";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/space-tourism-website/" element={<Home />} />
          <Route path="/space-tourism-website/crew" element={<Crew />} />
          <Route
            path="/space-tourism-website/destination"
            element={<Destination />}
          />
          <Route
            path="/space-tourism-website/technology"
            element={<Technology />}
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
