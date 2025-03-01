import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Layout from "./layouts/Layout";
import CenterFeed from "./pages/CenterFeed";
import NotFound from "./pages/NotFount";
import ListOfCountryPage from "./features/country/ListOfCountryPage";
import SingleCountry from "./features/country/SingleCountry";
import League from "./pages/League";
import LeaguePageRouter from "./features/leagues/LeaguePageRouter";
import "@ant-design/v5-patch-for-react-19";

function applyInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", savedTheme || "light");
}

applyInitialTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CenterFeed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="country" element={<ListOfCountryPage />} />
          <Route path="country/:country" element={<SingleCountry />} />
          <Route path="country/:country/:id" element={<League />}>
            <Route index element={<LeaguePageRouter />} />
            <Route path=":page" element={<LeaguePageRouter />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
