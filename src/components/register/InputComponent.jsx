import React from "react";
import "./styles/input-component.scss";

const InputComponent = (props) => {
  const { placeholder, value, onChange, type, onFocus, mt, error } = props;
  return (
    <section className="form-component" style={{ marginTop: mt }}>
      <div className="inputHolder">
        <input
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          maxLength={60}
          onFocus={onFocus}
        />
      </div>
      {error && <div className="error-text">{error}</div>}
    </section>
  );
};

export default InputComponent;
