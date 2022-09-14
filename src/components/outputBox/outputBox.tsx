import { PasswordContext } from "contexts/PasswordContext";
import React, { useContext } from "react";
import "components/outputBox/outputBox.scss";
import CopyToClipboard from "react-copy-to-clipboard";

const OutputBox: React.FC = () => {
  const { password } = useContext(PasswordContext);
  return (
    <div className="output-container">
      <div className="password-container">
        <p>{password}</p>
      </div>
      <CopyToClipboard text={password}>
        <button>
          <i className="fa-regular fa-copy"></i>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default OutputBox;
