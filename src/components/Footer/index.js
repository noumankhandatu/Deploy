import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="Footer__End">
      <div className="Footer__Container">
        <div className="Footer__InnerComponents">
          <div className="Footer__leftText">
            <p className="FooterTopText">© 2021 SLOTHz</p>
            <h4 className="FooterBottomText">
              Made with love by the SLOTHz team!
            </h4>
          </div>
          <div className="Footer__RightText">
            <i id="Footer__Twitter" class="fab fa-twitter"></i>

            <i id="Footer__Discord" class="fab fa-discord"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
