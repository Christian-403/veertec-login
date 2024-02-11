import React from "react";
import "./TobBar.scss";
import Button from "../Button/Button";
import Headphones from "../../Assets/images/headphone-line.png";
import Close from "../../Assets/images/Close.png";

const TopBar = () => {
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
              bgColor="#FFFFFF"
              disabled={false}
              borderColor="#E2E4E9"
              color="#525866"
              onClick={() => {
                alert("This button will navigate to Contact Us page");
              }}
            />
          </div>
          <Button
          type="button"
          img={Close}
          border="none"
          bgColor="#FFFFFF"
          disabled={false}
          onClick={()=>{}}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
