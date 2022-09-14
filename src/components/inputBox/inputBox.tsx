import React, { useContext } from "react";
import "./inputBox.scss";
import { Actions } from "contexts/actions";
import { PasswordContext } from "contexts/PasswordContext";
import { randomizer } from "./utils";

const InputBox: React.FC = () => {
  const { dispatch, length, lowerCase, upperCase, numbers, symbols } =
    useContext(PasswordContext);

  const handleCheckBoxChange: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const handleClick = () => {
    const password = randomizer(length, lowerCase, upperCase, numbers, symbols);
    dispatch({ type: Actions.setPassword, payload: password });
  };

  return (
    <div className="bottom-container">
      <div className="inputs-container">
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
            name={Actions.setLength}
            onChange={handleCheckBoxChange}
          />
        </div>
        <div className="checkboxes-container">
          <div className="checkbox-container">
            <span>
              <input
                type="checkBox"
                name={Actions.setLowerCase}
                onChange={handleCheckBoxChange}
              />
            </span>
            <label>Include LowerCase Letters</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkBox"
              name={Actions.setUpperCase}
              onChange={handleCheckBoxChange}
            />
            <label>Include UpperCase Letters</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkBox"
              name={Actions.setNumbers}
              onChange={handleCheckBoxChange}
            />
            <label>Include Numbers</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkBox"
              name={Actions.setSymbols}
              onChange={handleCheckBoxChange}
            />
            <label>Include Symbols</label>
          </div>
        </div>
      </div>
      <div className="strength-container">
        <p>strength</p>
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
  );
};

export default InputBox;
