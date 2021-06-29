import React from "react";
import Home from "./Home";

const HOC = (data) => {
  return (
    <div>
      <h1>iam higer order component</h1>
      <h2>iam {data.details.Name}</h2>
      <h3>my age is {data.details.age}</h3>
    </div>
  );
};

export default Home(HOC);
