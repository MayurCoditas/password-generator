import React from "react";
import { ICheckboxInput } from "./interfaces";
import "./checkBoxInput.scss";

const CheckBoxInput: React.FC<ICheckboxInput> = ({
  name,
  handleInputChange,
  labelName,
}) => {
  return (
    <div className="checkbox-container">
      <span>
        <input type="checkBox" name={name} onChange={handleInputChange} />
      </span>
      <label>{labelName}</label>
    </div>
  );
};

export default CheckBoxInput;
