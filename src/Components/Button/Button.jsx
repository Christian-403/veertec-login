import React from "react";
import "./Button.scss";
function Button({
  type,
  text,
  fontfamily,
  width,
  img,
  borderColor,
  borderRadius,
  bgColor,
  height,
  disabled,
  onClick,
  cursor,
}) {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `2px solid ${borderColor}`,
    borderRadius: borderRadius || "0.6rem",
    backgroundColor: bgColor,
    fontFamily: fontfamily,
    width: width || "auto",
    height: height || "auto",
    cursor: disabled ? "not-allowed" : cursor || "pointer",
  };
  return (
    <button
      className="button"
      type={type}
      style={buttonStyle}
      onClick={!disabled ? onClick : ()=>{}}
      disabled={disabled}
    >
      {img && <img src={img} alt="button Icon" />}
      {text}
    </button>
  );
}

export default Button;
