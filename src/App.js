import React from "react";
import "./App.css";
import GenericTable from "./components/GenericTable";
import CustomerSummary from "./components/CustomerSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBadge from "./components/ErrorBadge";
import { useRewardsData } from "./hooks/useRewardsData";
import { LABELS } from "./constants";

function App() {
  const { rewards, displaySummary, loading, error, columns } = useRewardsData();

  return (
    <div className="App">
      <Header title={LABELS.APP_TITLE} subtitle={LABELS.SUBTITLE} />

      <main className="app-main">
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
      </main>

      <Footer
        description={LABELS.FOOTER_NOTE}
        companyName="XYZ Rewards Inc."
        companyWebsite="https://www.xyz.com"
        contactEmail="support@xyz.com"
      />
    </div>
  );
}

export default App;
