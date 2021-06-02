import React from "react";
import Card from "./Card";
import Upcomming from "./style/Upcomming";

const SectionUpcomming = () => {
  return (
    <Upcomming>
      <h2>Up comming</h2>
      <div className="upcommingWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Upcomming>
  );
};

export default SectionUpcomming;
