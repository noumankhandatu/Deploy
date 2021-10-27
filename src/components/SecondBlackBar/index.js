import React from "react";
import "./secondblackbar.css";
const SecondBlackBar = () => {
  return (
    <div className="secondBlackbar__Start">
      <div className="SecondBlackBar__Discord">
        <h3 className="SecondBlackBar__UperText">Join our Discord Community</h3>
        <p className="SecondBlackBar__LowerText">
          The best community in this space with +2,000 members, with games,
          contests, giveaways, scholarships and more to come!
        </p>
        <button className="SecondBlackBar__Btn">
          <i class="fab fa-discord"></i>Join Now !
        </button>
      </div>
    </div>
  );
};

export default SecondBlackBar;
