import React from "react";
import "../entireroadmap.css";
const RoadMapCard = (props) => {
  return (
    <div>
      <div className="RoadMapCard__Text">
        <p style={{ textAlign: "center" }}>{props.text}</p>
      </div>
    </div>
  );
};

export default RoadMapCard;
