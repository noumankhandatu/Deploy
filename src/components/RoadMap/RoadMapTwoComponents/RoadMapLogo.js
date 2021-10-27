import React from "react";
import "../entireroadmap.css";
const RoadMapLogo = (props) => {
  return (
    <div className="RoadMap_logoSty">
      <div className="RoadMapLogo__IpFeildOne">
        <p className="BlockAge">{props.Dollar}</p>
      </div>
      <div>
        <p className="RoadMapLogo__IpFeildTwo">{props.time}%</p>
      </div>
    </div>
  );
};

export default RoadMapLogo;
