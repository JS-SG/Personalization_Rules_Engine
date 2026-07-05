function ConfidenceBar({ value }) {
  return (
    <div style={{ marginTop: "15px" }}>
      <h4>Confidence: {value}%</h4>

      <div
        style={{
          width: "100%",
          height: "18px",
          background: "#ddd",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${value*100}%`,
            height: "100%",
            background: "#22c55e",
            transition: "0.5s"
          }}
        />
      </div>
    </div>
  );
}

export default ConfidenceBar;