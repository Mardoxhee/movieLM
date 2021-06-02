import React from "react";
import Card from "./Card";
import Latest from "./style/Latest";

const SectionLatest = () => {
  return (
    <Latest>
      <h2>Latest</h2>
      <div className="latestWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Latest>
  );
};

export default SectionLatest;
