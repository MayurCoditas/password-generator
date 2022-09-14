import React from "react";
import "./passwordStrength.scss";
import { strengthSelector } from "./utils";

const PasswordStrength: React.FC<{ strength: number }> = ({ strength }) => {
  return (
    <div className="strength-container">
      <div className="strength-label-container">
        <label>Strength</label>
      </div>
      <div className="strength-image-container">
        <svg className={strength > 0 ? strengthSelector(strength) : ""}>
          <rect width="6" height="20" />
        </svg>
        <svg className={strength > 1 ? strengthSelector(strength) : ""}>
          <rect width="6" height="20" />
        </svg>
        <svg className={strength > 2 ? strengthSelector(strength) : ""}>
          <rect width="6" height="20" />
        </svg>
        <svg className={strength > 3 ? strengthSelector(strength) : ""}>
          <rect width="6" height="20" />
        </svg>
      </div>
    </div>
  );
};

export default PasswordStrength;
