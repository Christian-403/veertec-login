import React from "react";
import "./Button.scss";
import UseInnerWidth from "../../Hooks/useInnerWidth";

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
  color,
  padding,
}) {
  const innerWidth = UseInnerWidth();

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: border || `2px solid ${borderColor}`,
    borderRadius: borderRadius || "0.6rem",
    backgroundColor: bgColor || 'var(--white)',
    fontFamily: fontfamily || "Inter-Regular",
    width: width || "auto",
    height: height || "auto",
    cursor: disabled ? "not-allowed" : cursor || "pointer",
    gap: gap || "4px",
    color: color || 'var(--white)',
    padding: padding || "0.5rem 0.5rem",
    img: innerWidth > 1800 && width,
  };
  return (
    <button
      className="button"
      type={type}
      style={buttonStyle}
      onClick={!disabled ? onClick : () => {}}
      disabled={disabled}
    >
      {img && (
        <img
        style={{ width: innerWidth > 1800 ? '2.5rem' : 'auto' }}
        src={img}
          alt="button Icon"
          className="Button_image"
        />
      )}
      {text}
    </button>
  );
}

export default Button;
