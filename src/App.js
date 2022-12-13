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
    <div className="App w-full h-screen flex flex-col items-center text-[#1B255A] text-center font-poppins">
      <div className="container bg-white w-[28rem] h-[37.5rem] my-24 mx-auto rounded-xl">
        <h1 className="text-center text-4xl mt-4 mb-8">BMI Calculator</h1>
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
    </div>
  );
}

export default App;
