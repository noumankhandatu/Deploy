import React from "react";
import HeaderBtn from "../headerButton/headerbtn";
import UnitBtnHome from "../NavButton";
import header__logo from "../../assets/images/logo.png";
import "./header.css";
const Header = () => {
  return (
    <React.Fragment>
      <div>
        <div style={{ color: "white" }} class="nav ">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div className="header__lastFinsih">
              <img className="image__logoSize" src={header__logo} alt="" />
              <div class="nav-title">
                <small className="header__slotxtext">OutLawz</small>
                <small className="header__small"> Aka Datusing</small>
              </div>
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div id="units__Flexed" class="nav-links ">
            <div className="unit__role">
              <UnitBtnHome text="Home" />
              <UnitBtnHome text="Mint" />
              <UnitBtnHome text="Stats" />
              <UnitBtnHome text="Roadmap" />
              <UnitBtnHome text="Team" />
              <UnitBtnHome text="FAQ" />
              <HeaderBtn />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
