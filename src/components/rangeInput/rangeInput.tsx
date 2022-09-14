import React from "react";
import { IRangeInput } from "./interfaces";
import "./rangeInput.scss";

const RangeInput: React.FC<IRangeInput> = ({
  length,
  name,
  handleInputChange,
}) => {
  return (
    <div className="range-container">
      <div className="range-label-container">
        <label>Character Length</label>
        <label className="length-value">{length}</label>
      </div>
      <input
        type="range"
        min={8}
        max={20}
        step={1}
        defaultValue={8}
        name={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default RangeInput;
