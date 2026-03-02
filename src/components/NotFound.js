import { LABELS } from "../constants";

const NotFound = () => {
  return (
    <div
      style={{ "text-align": "center", background: "white", padding: "18vh" }}
    >
      <h2>{LABELS.ERRORS.PAGE_NOT_FOUND}</h2>
      <p>{LABELS.ERRORS.PAGE_NOT_FOUND_DESC}</p>
    </div>
  );
};

export default NotFound;
