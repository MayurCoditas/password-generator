import InputBox from "components/inputBox/inputBox";
import OutputBox from "components/outputBox/outputBox";
import React from "react";
import "Pages/homePage.scss";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="heading-container">
        <p>Password Generator</p>
      </div>
      <OutputBox />
      <InputBox />
    </div>
  );
};

export default HomePage;
