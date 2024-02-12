import React from "react";
import "./Input.scss";
function Input({
  type,
  placeholder,
  label,
  value,
  onChange,
  required,
  disabled,
  img,
  backgroundColor,
  color,
  width,
  borderRadius,
}) {
  const InputStyle = {
    fontFamily: "Inter-Thin",
    backgroundColor: backgroundColor || "var(--white)",
    color: color || "var(--darkgray)",
    padding: "0.7rem 2.8rem",
    width: width || "100%",
    borderRadius: borderRadius || "0.6rem",
    border: "1px solid var(--gray)",
  };
  return (
    <div className="Input_container">
      <div className="Input_inner_label">
        {label}
        {required ? (
          <span style={{ color: "var(--green)", padding: "2px" }}>*</span>
        ) : null}
      </div>
      <div className="Input_inner_content">
        <img src={img} alt="input icon" className="input-icon" />
        <input
          className="Input_content"
          type={type}
          style={InputStyle}
          placeholder={placeholder}
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
