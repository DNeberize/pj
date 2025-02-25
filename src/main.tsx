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
import Overview from "./leagues/Pages/Overview";
import Standings from "./leagues/Pages/Standings";
import Matches from "./leagues/Pages/Matches";
import Transfer from "./leagues/Pages/Transfer";
import Stats from "./leagues/Pages/Stats";
import Champions from "./leagues/Pages/Champions";
import Schedule from "./leagues/Pages/Schedule";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<CenterFeed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="country/" element={<ListOfCountryPage />} />
          <Route path="country/:country" element={<SingleCountry />} />
          <Route path="country/:country/:id" element={<League />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="standings" element={<Standings />} />
            <Route path="matches" element={<Matches />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="stats" element={<Stats />} />
            <Route path="champions" element={<Champions />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
