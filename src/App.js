import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = () => {
    if (weight === 0 || height === 0) {
      alert("Please type your weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed());
    }

    if (bmi <= 18) {
      setMessage("You are so weak!");
    } else if (bmi <= 25 && bmi >= 18) {
      setMessage("You are at ideal weight!");
    } else if (bmi <= 30 && bmi >= 25) {
      setMessage("You are fat!");
    } else if (bmi >= 30 && bmi <= 35) {
      setMessage("You are obese!");
    } else if (bmi >= 35) {
      setMessage("Moderate-risk obesity! Go diet and exercise!");
    }
  };

  console.log(calcBmi);

  return (
    <div className="App w-full h-screen flex flex-col items-center text-[#1B255A] text-center font-poppins">
      <div className="container bg-white w-[25rem] h-[37.5rem] my-24 mx-auto rounded-xl">
        <h1 className="text-4xl mt-4">BMI Calculator</h1>
        <div className="inputs mt-8 mb-2">
          <Input label="Weight(kg): " value={weight} setValue={setWeight} />
          <Input label="Height(cm): " value={height} setValue={setHeight} />
        </div>
        <div className="button mb-8">
          <Button calcBmi={calcBmi} />
        </div>
        <div className="result w-52 p-2 mx-auto border-2 border-[#3B3486]">
          <Result bmi={bmi} message={message} />
        </div>
      </div>
    </div>
  );
}

export default App;
