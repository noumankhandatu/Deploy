import React from "react";
import "./teamcomponent.css";

const TeamComponentCard = (props) => {
  return (
    <div>
      <div className="CardContainer">
        <div>
          <img className="CardPic" src={props.imgSrc} alt="" />
          <div id="CardComponent__InvisibleTag">
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div id="CardDetail">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamComponentCard;
