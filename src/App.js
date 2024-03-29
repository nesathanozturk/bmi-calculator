import { useState } from "react";
import Result from "./components/Result/Result";
import Input from "./components/Input/Input";
import Button from "./components/Buttons/Button";
import ResetButton from "./components/Buttons/ResetButton";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = () => {
    if (weight === 0 || height === 0) {
      alert("Please type your weight and height!");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed());

      if (bmi <= 18) {
        setMessage("You are so weak!");
      } else if (bmi <= 25 && bmi >= 18) {
        setMessage("You are at ideal weight!");
      } else if (bmi <= 30 && bmi >= 25) {
        setMessage("You are fat!");
      } else if (bmi >= 30 && bmi <= 35) {
        setMessage("You are low-risk obesity");
      } else if (bmi >= 35) {
        setMessage("You are moderate-risk obesity! Go diet and exercise!");
      }
    }
  };

  return (
    <div className="App w-full h-screen m-0 p-0 box-border flex flex-col items-center text-[#1B255A] text-center font-poppins">
      <div className="container bg-white w-[22rem] h-[33rem] p-4 my-24 mx-auto rounded-xl shadow-2xl">
        <h1 className="text-4xl mt-4 mb-8">BMI Calculator</h1>
        <div className="result w-52 mt-4 p-2 mx-auto border-2 border-[#3B3486]">
          <Result bmi={bmi} message={message} />
        </div>
        <div className="mt-8 mb-2">
          <Input label="Height(cm): " value={height} setValue={setHeight} />
          <Input label="Weight(kg): " value={weight} setValue={setWeight} />
        </div>
        <div className="mb-2">
          <Button calcBmi={calcBmi} />
        </div>
        <div>
          <ResetButton />
        </div>
      </div>
    </div>
  );
}

export default App;
