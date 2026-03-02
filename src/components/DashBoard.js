import "../App.css";
import GenericTable from "../components/GenericTable";
import CustomerSummary from "../components/CustomerSummary";
import ErrorBadge from "../components/ErrorBadge";
import { useRewardsData } from "../hooks/useRewardsData";
import { LABELS } from "../constants";

const DashBoard = () => {
  const { rewards, displaySummary, loading, error, columns } = useRewardsData();
  return (
    <div className="dashboard">
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
    </div>
  );
};

export default DashBoard;
