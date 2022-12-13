import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="inputs">
        <Input />
        <Input />
      </div>
      <div className="button">
        <Button />
      </div>
      <div className="result">
        <Result />
      </div>
    </div>
  );
}

export default App;
