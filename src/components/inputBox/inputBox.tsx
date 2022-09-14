import React, { useContext, useState } from "react";
import "./inputBox.scss";
import { Actions } from "contexts/actions";
import { PasswordContext } from "contexts/PasswordContext";
import { randomizer } from "./utils";
import RangeInput from "components/rangeInput/rangeInput";
import CheckBoxInput from "components/checkBoxInput/checkBoxInput";
import PasswordStrength from "components/passwordStrength/passwordStrength";

const InputBox: React.FC = () => {
  const { dispatch, length, lowerCase, upperCase, numbers, symbols } =
    useContext(PasswordContext);
  const [strength, setStrength] = useState(0);
  const handleInputChange: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked && strength < 4) {
      setStrength(strength + 1);
    } else if (event.target.name !== Actions.setLength && strength > 0) {
      setStrength(strength - 1);
    }

    switch (event.target.name) {
      case Actions.setLowerCase:
        dispatch({ type: Actions.setLowerCase, payload: event.target.checked });
        break;
      case Actions.setUpperCase:
        dispatch({ type: Actions.setUpperCase, payload: event.target.checked });
        break;
      case Actions.setNumbers:
        dispatch({ type: Actions.setNumbers, payload: event.target.checked });
        break;
      case Actions.setSymbols:
        dispatch({ type: Actions.setSymbols, payload: event.target.checked });
        break;
      case Actions.setLength:
        dispatch({
          type: Actions.setLength,
          payload: Number(event.target.value),
        });
        break;
    }
  };

  const handleClick: React.MouseEventHandler = () => {
    let password: string = randomizer(
      length,
      lowerCase,
      upperCase,
      numbers,
      symbols
    );
    dispatch({ type: Actions.setPassword, payload: password });
  };

  return (
    <div className="bottom-container">
      <div className="inputs-container">
        <RangeInput
          length={length}
          name={Actions.setLength}
          handleInputChange={handleInputChange}
        />
        <div className="checkboxes-container">
          <CheckBoxInput
            name={Actions.setLowerCase}
            handleInputChange={handleInputChange}
            labelName="Include Lowercase Letters"
          />
          <CheckBoxInput
            name={Actions.setUpperCase}
            handleInputChange={handleInputChange}
            labelName="Include Uppercase Letters"
          />
          <CheckBoxInput
            name={Actions.setNumbers}
            handleInputChange={handleInputChange}
            labelName="Include Numbers"
          />
          <CheckBoxInput
            name={Actions.setSymbols}
            handleInputChange={handleInputChange}
            labelName="Include Symbols"
          />
        </div>
        <div className="strength-container">
          <PasswordStrength strength={strength} />
        </div>
        <div className="button-container">
          <button onClick={handleClick} disabled={strength === 0}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
