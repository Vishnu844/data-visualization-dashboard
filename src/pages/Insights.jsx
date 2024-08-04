import React, { useEffect, useState } from "react";
import "./insights.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NoData from "../components/NoData";

const Insights = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loaction = useLocation();
  const insights = loaction.state;

  useEffect(() => {
    const getInsights = async () => {
      try {
        if (!insights) {
          const response = await axios.get("http://localhost:5555/api/search");
          setData(response.data.data);
        } else {
          setData(insights.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getInsights();
  }, [insights]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.toString()} />;
  }

  if (data.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <section>
        <div className="insights">
          {data.map((insight) => {
            return (
              <div className="insight" key={insight._id}>
                <span className={insight.published ? "badge" : "hidden"}>
                  Published
                </span>
                <h2 className="insight-title">{insight.title}</h2>
                <p className="insight-content">{insight.insight}</p>
                <p className="insight-info">
                  <strong>Sector:</strong> {insight.sector}
                </p>
                <p className="insight-info">
                  <strong>Country:</strong> {insight.country}
                </p>
                <a
                  href={insight.url}
                  target="_blank"
                  rel="noreferrer"
                  className="insight-link"
                >
                  Read full article on {insight.title}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Insights;
