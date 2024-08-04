import React from "react";
import error from "../images/error.jpg";

const Error = ({ message }) => {
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
      <img src={error} alt="error" width={300} height={300} />
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
