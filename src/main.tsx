import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import CenterFeed from "./Feed/CenterFeed";
import NotFound from "./NotFount";
import ListOfCountryPage from "./Country/ListOfCountryPage";
import SingleCountry from "./Country/SingleCountry";
import League from "./leagues/League";
import LeaguePageRouter from "./leagues/LeaguePageRouter";

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
