import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import axios from "axios";
import Loading from "../components/Loading";
import Error from "../components/Error";
import StackedBarChart from "../components/StackedBarChart";
import LineChart from "../components/LineChart";
import "./analysis.css";

const Analysis = () => {
  const [data, setData] = useState({
    averageIntensityByTopic: [],
    mostRelevantInsightsByRegion: [],
    likelihoodByCountry: [],
    intensityOverYears: [],
    insightsCountByCountry: [],
    prevalentTopicsByRegion: [],
    mostRelevantTopics: [],
    distributionByPestle: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requests = [
      "api/average-intensity-by-topic",
      "api/most-relevant-insights-by-region",
      "api/likelihood-by-country",
      "api/intensity-over-years",
      "api/insights-count-by-country",
      "api/prevalent-topics-by-region",
      "api/most-relevant-topics",
      "api/distribution-by-pestle",
    ];

    const fetchData = async () => {
      try {
        setLoading(true);
        const [
          averageIntensityByTopic,
          mostRelevantInsightsByRegion,
          likelihoodByCountry,
          intensityOverYears,
          insightsCountByCountry,
          prevalentTopicsByRegion,
          mostRelevantTopics,
          distributionByPestle,
        ] = await Promise.all(
          requests.map((request) =>
            axios.get(process.env.REACT_APP_BASE_URL + request)
          )
        );

        setData({
          averageIntensityByTopic: averageIntensityByTopic.data,
          mostRelevantInsightsByRegion: mostRelevantInsightsByRegion.data,
          likelihoodByCountry: likelihoodByCountry.data,
          intensityOverYears: intensityOverYears.data,
          insightsCountByCountry: insightsCountByCountry.data,
          prevalentTopicsByRegion: prevalentTopicsByRegion.data,
          mostRelevantTopics: mostRelevantTopics.data,
          distributionByPestle: distributionByPestle.data,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const regions = data.prevalentTopicsByRegion.map((item) => item._id);
  const topics = [
    ...new Set(
      data.prevalentTopicsByRegion.flatMap((item) =>
        item.topics.map((topic) => topic.topic)
      )
    ),
  ];

  const datasets = topics.map((topic) => {
    return {
      label: topic,
      data: regions.map((region) => {
        const regionData = data.prevalentTopicsByRegion.find(
          (item) => item._id === region
        );
        const topicData = regionData.topics.find((t) => t.topic === topic);
        return topicData ? topicData.count : 0;
      }),
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, 0.6)`,
    };
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.toString()} />;
  }

  return (
    <>
      <section className="analysis-heading">
        <h1>Data Analysis on Insights</h1>
        <p>
          In this section, we delve into the data to uncover key insights and
          trends across various parameters such as intensity, relevance,
          likelihood, and distribution of insights. By analyzing these factors
          across different regions, countries, and topics, we aim to provide a
          comprehensive understanding of the significant patterns and dynamics.
        </p>
      </section>
      <section className="charts">
        <div className="chart">
          <BarChart
            title={"Intensity vs Topic"}
            labels={data.averageIntensityByTopic.topics}
            data={data.averageIntensityByTopic.intensity}
            label={"Intensity"}
          />
        </div>
        <div className="chart">
          <BarChart
            title={"Relevance vs Region"}
            labels={data.mostRelevantInsightsByRegion.regions}
            data={data.mostRelevantInsightsByRegion.relevance}
            label={"Relevance"}
          />
        </div>
        <div className="chart">
          <BarChart
            title={"Likelihood vs Country"}
            labels={data.likelihoodByCountry.countries}
            data={data.likelihoodByCountry.likelihood}
            label={"Likelihood"}
          />
        </div>
        <div className="chart">
          <LineChart
            title={"Intensity vs Years"}
            labels={data.intensityOverYears.years}
            data={data.intensityOverYears.intensity}
            label={"Intensity"}
          />
        </div>
        <div className="chart">
          <BarChart
            title={"Most Relevant Topics"}
            labels={data.mostRelevantTopics.topics}
            data={data.mostRelevantTopics.relevance}
            label={"Relevance"}
          />
        </div>
        <div className="chart">
          <BarChart
            title={"Distribution by Pestle"}
            labels={data.distributionByPestle.pestle}
            data={data.distributionByPestle.count}
            label={"Insights"}
          />
        </div>
      </section>
      <div className="chart">
        <PieChart
          title={"Distribution of Insights over County"}
          labels={data.insightsCountByCountry.countries}
          data={data.insightsCountByCountry.count}
          label={"Insights"}
        />
      </div>
      <div className="chart">
        <StackedBarChart
          title={"Prevalent Topics By Region"}
          labels={regions}
          datasets={datasets}
        />
      </div>
    </>
  );
};

export default Analysis;
