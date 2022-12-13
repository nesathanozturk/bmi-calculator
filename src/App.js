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
      <div className="container bg-white w-[25rem] h-[37.5rem] my-24 mx-auto rounded-xl">
        <h1 className="text-4xl mt-4">BMI Calculator</h1>
        <div className="inputs mt-8 mb-2">
          <Input label="Weight(kg): " value={weight} setValue={setWeight} />
          <Input label="Height(cm): " value={height} setValue={setHeight} />
        </div>
        <div className="button mb-8">
          <Button />
        </div>
        <div className="result w-48 p-2 mx-auto border-2 border-[#3B3486] text-left">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
