import React, { useEffect, useState } from "react";
import "./home.css";
import PieChart from "../components/PieChart";
import axios from "axios";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [countData, setCountData] = useState([]);
  const [topCountries, setTopCountries] = useState([]);
  const [topLikelihood, setTopLikelihood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const baseUrl = "http://localhost:5555/";
  console.log(process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countData, topCountries, topLikelihood] = await Promise.all([
          axios.get(process.env.REACT_APP_BASE_URL + "api/get-count"),
          axios.get(
            process.env.REACT_APP_BASE_URL +
              "api/insights-with-different-likelihood"
          ),
          axios.get(
            process.env.REACT_APP_BASE_URL +
              "api/top-5-countries-with-highest-number-of-insights"
          ),
        ]);

        setCountData(countData.data);
        setTopCountries(topCountries.data);
        setTopLikelihood(topLikelihood.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const topCountriesInsights = topCountries.map(
    (country) => country.totalInsights
  );
  const topCountriesNames = topCountries.map((country) => country._id);

  const topLikelihoods = topLikelihood.map((likelihood) => likelihood._id);
  const topLikelihoodInsights = topLikelihood.map(
    (likelihood) => likelihood.totalInsights
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.toString()} />;
  }

  return (
    <>
      <section>
        <div className="cards">
          <div className="card card-1 hover-transition">
            <div>
              <h4>Insights</h4>
              <i className="bx bx-grid-alt"></i>
            </div>
            <span>{countData?.insightsCount}</span>
          </div>
          <div className="card card-2 hover-transition">
            <div>
              <h4>Sectors</h4>
              <i className="bx bx-category-alt"></i>
            </div>
            <span>{countData?.sectorsCount}</span>
          </div>
          <div className="card card-3 hover-transition">
            <div>
              <h4>Topics</h4>
              <i className="bx bx-book-alt"></i>
            </div>
            <span>{countData?.topicsCount}</span>
          </div>
          <div className="card card-4 hover-transition">
            <div>
              <h4>Published</h4>
              <i className="bx bx-bookmark-plus"></i>
            </div>
            <span>{countData?.publishedCount}</span>
          </div>
        </div>
        <div className="home-charts">
          <div>
            <PieChart
              title={"Top-5 countries with most insights"}
              labels={topCountriesNames}
              data={topCountriesInsights}
              label={"Insights"}
            />
          </div>
          <div>
            <PieChart
              title={"Likelihood vs Insights"}
              labels={topLikelihoods}
              data={topLikelihoodInsights}
              label={"Insights"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
