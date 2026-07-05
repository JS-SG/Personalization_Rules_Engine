import { useState } from "react";
import API from "../api";

import Navbar from "../components/Navbar";
import SessionForm from "../components/SessionForm";
import SessionSimulator from "../components/SessionSimulator";
import ResultCard from "../components/ResultCard";

function Home() {

    const [events, setEvents] = useState([]);

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const classify = async (eventList) => {

        setLoading(true);

        try {

            const res = await API.post("/classify", {
                events: eventList
            });

            setResult(res.data.result);

            setEvents(eventList);

        } catch (err) {

            alert("Classification failed.");

            console.log(err);

        }

        setLoading(false);

    };

    return (

        <div>

            <Navbar />

            <div
                style={{
                    maxWidth: "900px",
                    margin: "30px auto",
                    padding: "20px"
                }}
            >

                <SessionForm classify={classify} />

                <br />

                <SessionSimulator classify={classify} />

                <br />

                {loading &&

                    <h3>Analyzing Shopper Session...</h3>

                }

                {result &&

                    <ResultCard result={result} />

                }

            </div>

        </div>

    );

}

export default Home;