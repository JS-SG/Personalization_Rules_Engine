import { useState } from "react";

function SessionForm({ classify }) {

    const [text, setText] = useState("");

    const submit = () => {

        if (!text.trim()) {
            alert("Enter at least one event.");
            return;
        }

        const events = text
            .split("\n")
            .map(event => event.trim())
            .filter(event => event !== "");

        classify(events);

    };

    return (

        <div
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 8px rgba(0,0,0,.1)"
            }}
        >

            <h2>Manual Session Input</h2>

            <p>
                Enter one shopper event per line.
            </p>

            <textarea
                rows={10}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Visited Home
Viewed Product
Compared Products
Added to Cart
Exited Website`}
            />

            <br /><br />

            <button
                onClick={submit}
                style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "6px",
                    fontSize: "16px"
                }}
            >
                Analyze Session
            </button>

        </div>

    );

}

export default SessionForm;