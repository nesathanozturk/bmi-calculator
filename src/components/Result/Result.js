function Result({ bmi, message }) {
  return (
    <div>
      <p className="text-lg mt-1">
        Your BMI is <br /> {bmi}
      </p>
      <p className="text-lg">{message}</p>
    </div>
  );
}

export default Result;
