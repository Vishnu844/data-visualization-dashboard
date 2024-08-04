import React from "react";
import noDataFound from "../images/no-data-found.jpg";

const NoData = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "#777",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={noDataFound} alt="error" width={400} height={400} />
    </div>
  );
};

export default NoData;
