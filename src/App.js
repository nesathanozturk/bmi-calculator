import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="inputs">
        <Input label="Weight(kg): " value={weight} setValue={setWeight} />
        <Input label="Height(cm): " value={height} setValue={setHeight} />
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
