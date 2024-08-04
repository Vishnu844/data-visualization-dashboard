import React from "react";
import "./categories.css";
import energy from "../images/energy.jpg";
import healthcare from "../images/healthcare.jpg";
import informationTechnology from "../images/IT.jpg";
import financialServices from "../images/financial-services.jpg";
import transportation from "../images/transportation.jpg";
import technology from "../images/technology.jpg";
import economy from "../images/economy.jpg";
import healthCare from "../images/health-care.jpg";
import politics from "../images/politics.jpg";
import security from "../images/security.jpg";
import usa from "../images/usa.jpg";
import china from "../images/china.jpg";
import russia from "../images/russia.jpg";
import iran from "../images/iran.jpg";
import india from "../images/india.jpg";
import economic from "../images/economic.jpg";
import environmental from "../images/environmental.jpg";
import industries from "../images/industries.jpg";
import social from "../images/social.jpg";
import technological from "../images/technological.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const navigate = useNavigate();
  const handleClick = async (arg) => {
    let url;
    const baseUrl = "http://localhost:5555/";
    if (arg.sector) {
      url = `${process.env.REACT_APP_BASE_URL}api/get-insights-by-categories?sector=${arg.sector}`;
    } else if (arg.topic) {
      url = `${process.env.REACT_APP_BASE_URL}api/get-insights-by-categories?topic=${arg.topic}`;
    } else if (arg.country) {
      url = `${process.env.REACT_APP_BASE_URL}api/get-insights-by-categories?country=${arg.country}`;
    } else if (arg.trade) {
      url = `${process.env.REACT_APP_BASE_URL}api/get-insights-by-categories?pestle=${arg.trade}`;
    }

    const response = await axios.get(url);

    if (response.data.status === 1) {
      navigate("/insights", { state: response.data });
    }
    try {
    } catch (err) {
      alert(err.message);
    }
  };
  const sectors = [
    { sector: "Energy", image: energy },
    { sector: "Healthcare", image: healthcare },
    { sector: "Information Technology", image: informationTechnology },
    { sector: "Financial Services", image: financialServices },
    { sector: "Transportation", image: transportation },
  ];

  const topics = [
    { topic: "Technology", image: technology },
    { topic: "Economy", image: economy },
    { topic: "Healthcare", image: healthCare },
    { topic: "Politics", image: politics },
    { topic: "Security", image: security },
  ];

  const countries = [
    { country: "United States of America", image: usa },
    { country: "China", image: china },
    { country: "Russia", image: russia },
    { country: "Iran", image: iran },
    { country: "India", image: india },
  ];

  const trades = [
    { trade: "Economic", image: economic },
    { trade: "Environmental", image: environmental },
    { trade: "Industries", image: industries },
    { trade: "Social", image: social },
    { trade: "Technological", image: technological },
  ];
  return (
    <section>
      <h1 className="categories-heading">Search Insights by Popular filters</h1>
      <div className="filter">
        <h3>Sectors</h3>
        <div className="sectors">
          {sectors.map((sector) => {
            return (
              <div
                key={sector.sector}
                className="item"
                onClick={() => handleClick({ sector: sector.sector })}
              >
                <img src={sector.image} alt={sector.sector} loading="lazy" />
                <p>{sector.sector}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Topics</h3>
        <div className="topics">
          {topics.map((topic) => {
            return (
              <div
                key={topic.topic}
                className="item"
                onClick={() => handleClick({ topic: topic.topic })}
              >
                <img src={topic.image} alt={topic.topic} loading="lazy" />
                <p>{topic.topic}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Countries</h3>
        <div className="countries">
          {countries.map((country) => {
            return (
              <div
                key={country.country}
                className="item"
                onClick={() => handleClick({ country: country.country })}
              >
                <img src={country.image} alt={country.country} loading="lazy" />
                <p>{country.country}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Trade</h3>
        <div className="trades">
          {trades.map((trade) => {
            return (
              <div
                key={trade.trade}
                className="item"
                onClick={() => handleClick({ trade: trade.trade })}
              >
                <img src={trade.image} alt={trade.trade} loading="lazy" />
                <p>{trade.trade}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
