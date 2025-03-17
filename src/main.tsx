import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Layout from "./layouts/Layout";
import CenterFeed from "./pages/CenterFeed";
import NotFound from "./pages/NotFount";
import ListOfCountryPage from "./features/country/ListOfCountryPage";
import SingleCountry from "./features/country/SingleCountry";
import League from "./pages/League"; // Assumes League includes <Outlet />
import LeaguePageRouter from "./features/leagues/LeaguePageRouter";
import "@ant-design/v5-patch-for-react-19";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Team from "./pages/Team"; // Assumes Team includes <Outlet />
import TeamPageRouter from "./features/teams/TeamPageRouter";
import NoSidebarLayout from "./layouts/NoSidebarLayout";

const queryClient = new QueryClient();
function applyInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", savedTheme || "light");
}

applyInitialTheme();

const homeRoute = (
  <Route path="/" element={<Layout />}>
    <Route index element={<CenterFeed />} />
    <Route path="country" element={<ListOfCountryPage />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

const countryRoute = (
  <Route path="country/:country" element={<Layout />}>
    <Route index element={<SingleCountry />} />
  </Route>
);

const leagueRoute = (
  <Route path="country/:country/:id" element={<NoSidebarLayout />}>
    <Route element={<League />}>
      <Route index element={<LeaguePageRouter />} />
      <Route path=":page" element={<LeaguePageRouter />} />
    </Route>
  </Route>
);

const teamRoute = (
  <Route path="country/:country/:id/team/:team" element={<NoSidebarLayout />}>
    <Route element={<Team />}>
      <Route index element={<TeamPageRouter />} />
      <Route path=":page" element={<TeamPageRouter />} />
    </Route>
  </Route>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {homeRoute}
          {countryRoute}
          {leagueRoute}
          {teamRoute}
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
