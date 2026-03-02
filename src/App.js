import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import NotFound from "./components/NotFound";
// import GenericTable from "./components/GenericTable";
// import CustomerSummary from "./components/CustomerSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ErrorBadge from "./components/ErrorBadge";
// import { useRewardsData } from "./hooks/useRewardsData";
import { LABELS } from "./constants";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // const { rewards, displaySummary, loading, error, columns } = useRewardsData();

  return (
    <div className="App , app-wrapper">
      <Header title={LABELS.APP_TITLE} subtitle={LABELS.SUBTITLE} />
      <main className="app-content">
        <ul>
          {/* <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            {LABELS.ROUTES.DASHBOARD}
          </Link>
        </li> */}
          <li style={{ padding: "1%" }}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              {LABELS.ROUTES.DASHBOARD}
            </Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/">
            <Route index={true} element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
      {/* <main className="app-main">
        {error && <ErrorBadge error={error} />}

        <CustomerSummary summary={displaySummary} loading={loading} />

        <GenericTable
          data={rewards}
          loading={loading}
          columns={columns}
          title={LABELS.REWARDS_TABLE_DEFAULT_TITLE}
          itemName={LABELS.REWARDS_TABLE_DEFAULT_ITEM}
          loadingText={LABELS.LOADING_REWARDS}
        />
      </main> */}

      <Footer
        companyName="XYZ Rewards Inc."
        companyWebsite="https://www.xyz.com"
        contactEmail="support@xyz.com"
      />
    </div>
  );
}

export default App;
