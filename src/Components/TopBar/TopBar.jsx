import React from "react";
import "./TobBar.scss";
import Button from "../Button/Button";
import Headphones from "../../Assets/images/headphone-line.png";
import Close from "../../Assets/images/Close.png";
import UseInnerWidth from "../../Hooks/useInnerWidth";

const TopBar = () => {
  const width = UseInnerWidth();
  return (
    <div className="TopBar_Outer">
      <div className="TopBar_Inner">
        <div className="TopbBar_Inner_content">
          <div className="TopBar_help">Need help?</div>
          <div className="TopBar_help_button">
            <Button
              type="button"
              text="Contact Us"
              fontfamily="Inter-Regular"
              img={Headphones}
              bgColor='var(--white)'
              disabled={false}
              borderColor='var(--gray)'
              color='var(--darkgray)'
              padding=" 0.5rem"
              onClick={() => {}}
            />
          </div>
          <img
            className="TopBar_close_button"
            src={Close}
            alt="Close button"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
