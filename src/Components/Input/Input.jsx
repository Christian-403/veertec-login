import React from "react";
import "./Input.scss";
function Input({
  type,
  placeholder,
  className,
  label,
  value,
  onChange,
  required,
  disabled,
  img,
  fontfamily,
  backgroundColor,
  color,
  width,
  borderRadius,
}) {
  const InputStyle = {
    fontFamily: "Inter-Thin",
    backgroundColor: backgroundColor || "#FFFFFF",
    color: color || "#868C98",
    padding: "0.7rem 2.8rem",
    width: width || "100%",
    borderRadius: borderRadius || "0.6rem",
    border: "1px solid #E2E4E9",
  };
  return (
    <div className="Input_container">
      <div className="Input_inner_label">
        {label}
        {required ? (
          <span style={{ color: "#8CCFB7", padding: "2px" }}>*</span>
        ) : null}
      </div>
      <div className="Input_inner_content">
        <img
          src={img}
          alt="input icon"
          width="20px"
          height="20px"
          className="input-icon"
        />
        <input
          type={type}
          style={InputStyle}
          placeholder={img && placeholder}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
          width={width}
        />
      </div>
    </div>
  );
}

export default Input;
