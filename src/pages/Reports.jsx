import React from "react";

const Reports = () => {
  return (
    <section>
      <h1>Individual Reports of Analyses</h1>
      <p>
        This section presents detailed reports based on the data analysis. Each
        report provides valuable insights into various dimensions such as topic
        intensity, regional relevance, country-specific likelihood, and more.
        Through bar charts, line charts, and other visual tools.
      </p>
      <div className="reports">
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Intensity by Topic</h2>
          <h4>Report:</h4>
          <p>
            This analysis identifies the topics with the highest average
            intensity, highlighting areas that have a significant impact or
            urgency. Topics such as "Technology" and "Environment" exhibit the
            highest average intensity, indicating critical developments or
            concerns in these areas. This information can guide stakeholders in
            prioritizing actions and resources towards these high-intensity
            topics. By focusing on these areas, organizations can better manage
            risks and seize opportunities related to these pressing issues.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Relevance by Region</h2>
          <h4>Report:</h4>
          <p>
            This analysis determines the regions with the most relevant
            insights, helping to understand where significant changes or impacts
            are occurring. Regions like "North America" and "Europe" show high
            relevance scores, indicating a concentration of important events or
            trends. This can assist in regional strategic planning, allowing
            organizations to tailor their strategies to the most relevant
            regional issues. Additionally, this insight can guide investment
            decisions and policy-making to address the most pertinent regional
            challenges.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Likelihood by Country</h2>
          <h4>Report:</h4>
          <p>
            This analysis compares the likelihood of various insights across
            different countries, providing a comparative risk assessment.
            Countries such as "United States" and "China" display high
            likelihood scores for certain insights, suggesting these regions are
            more prone to specific developments or risks. This information can
            be invaluable for multinational companies and policymakers to
            anticipate and mitigate potential issues. It helps in understanding
            country-specific risk profiles and preparing accordingly.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Intensity over Time</h2>
          <h4>Report:</h4>
          <p>
            This analysis examines how the intensity of insights has changed
            over the years, revealing trends and patterns over time. The line
            chart shows that certain years, like 2017 and 2020, experienced
            spikes in intensity, possibly due to significant global events. This
            trend analysis is crucial for understanding the historical context
            of developments and anticipating future trends. It aids in strategic
            planning and forecasting by highlighting periods of high activity or
            change.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Distribution of Insights by Country</h2>
          <h4>Report:</h4>
          <p>
            This analysis visualizes which countries have the most recorded
            insights, indicating the focus areas for data collection and
            analysis. Countries like "United States," "China," and "India" have
            the highest number of insights, reflecting their significant roles
            in global developments. This distribution helps in understanding
            where most of the data is concentrated, providing a geographical
            perspective on global issues. It can guide further research and
            analysis efforts to ensure comprehensive coverage.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Topics by Region</h2>
          <h4>Report:</h4>
          <p>
            This analysis identifies the most prevalent topics in different
            regions, providing a regional perspective on key issues. The stacked
            bar chart shows that "Technology" is a dominant topic in "North
            America," while "Environment" is prevalent in "Europe." This
            regional topic analysis helps in understanding regional priorities
            and concerns, aiding in tailored strategic planning and
            policy-making. It ensures that strategies are aligned with regional
            needs and trends.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Relevance by Topic</h2>
          <h4>Report:</h4>
          <p>
            This analysis identifies the topics deemed most relevant,
            highlighting areas of significant importance. Topics like
            "Technology" and "Health" have high relevance scores, indicating
            their critical role in current global dynamics. Understanding which
            topics are most relevant helps in prioritizing research,
            investments, and policy-making efforts. It ensures that attention is
            focused on the most impactful and significant issues.
          </p>
        </div>
        <div className="report" style={{ marginInline: "1rem" }}>
          <h2>Distribution by Pestle</h2>
          <h4>Report:</h4>
          <p>
            This analysis explores the distribution of insights across different
            PESTLE categories (Political, Economic, Social, Technological,
            Legal, Environmental). The bar chart reveals that "Technological"
            and "Environmental" insights are the most prevalent, reflecting
            significant focus on technological advancements and environmental
            concerns. This categorization helps in understanding the diverse
            impacts of different factors on global developments. By analyzing
            PESTLE categories, organizations can gain a comprehensive view of
            the external factors influencing their operations and strategic
            decisions. This insight is crucial for holistic risk assessment and
            opportunity identification across multiple dimensions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reports;
