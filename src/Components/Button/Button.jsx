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
  gap,
  border,
  color

}) {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: border ||`2px solid ${borderColor}`,
    borderRadius: borderRadius || "0.6rem",
    backgroundColor: bgColor || "#FFFFFF",
    fontFamily: fontfamily || "Inter-Regular",
    width: width || "auto",
    height: height || "auto",
    cursor: disabled ? "not-allowed" : cursor || "pointer",
    gap: gap || "4px",
    color: color || "#FFFFFF"
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
