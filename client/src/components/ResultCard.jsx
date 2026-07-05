import ConfidenceBar from "./ConfidenceBar";

function ResultCard({ result }) {

  if (!result) return null;

  return (
    <div
      style={{
        background: "#fff",
        marginTop: "25px",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 0 8px rgba(0,0,0,.15)"
      }}
    >
      <h2>Classification Result</h2>

      <hr />

      <h3>
        Shopper Type :
        <span style={{ color: "#2563eb" }}>
          {" "}
          {result.shopperType}
        </span>
      </h3>

      <ConfidenceBar value={result.confidence} />

      <h3>Evidence</h3>

      <ul>
        {result.evidence.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Recommended Action</h3>

      <p>{result.recommendedAction}</p>

      <h3>Reason</h3>

      <p>{result.reason}</p>
    </div>
  );
}

export default ResultCard;