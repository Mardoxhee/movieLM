import React from "react";
import Card from "./Card";
import Series from "./style/Series";

const PopularSeries = () => {
  return (
    <Series>
      <h2>Top rated Series</h2>
      <div className="serieWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Series>
  );
};

export default PopularSeries;
