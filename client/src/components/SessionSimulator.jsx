import { useState } from "react";

function SessionSimulator({ classify }) {

  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const clearEvents = () => {
    setEvents([]);
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        marginTop: "25px",
        borderRadius: "10px",
        boxShadow: "0 0 8px rgba(0,0,0,.15)"
      }}
    >
      <h2>Session Simulator</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px"
        }}
      >
        <button onClick={() => addEvent("Visited Home")}>
          Home
        </button>

        <button onClick={() => addEvent("Viewed Product")}>
          Product View
        </button>

        <button onClick={() => addEvent("Compared Products")}>
          Compare
        </button>

        <button onClick={() => addEvent("Applied Coupon")}>
          Coupon
        </button>

        <button onClick={() => addEvent("Added to Cart")}>
          Add To Cart
        </button>

        <button onClick={() => addEvent("Purchased Product")}>
          Purchase
        </button>

        <button onClick={() => addEvent("Exited Website")}>
          Exit
        </button>
      </div>

      <h3>Current Session</h3>

      <ol>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ol>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px"
        }}
      >
        <button
          onClick={() => classify(events)}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px"
          }}
        >
          Analyze Session
        </button>

        <button
          onClick={clearEvents}
          style={{
            background: "#dc2626",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px"
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default SessionSimulator;