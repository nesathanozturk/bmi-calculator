function Result({ bmi, message }) {
  return (
    <div>
      <p className="text-lg">
        Your body mass index is: <br /> {bmi}
      </p>
      <p className="mt-2 text-lg">{message}</p>
    </div>
  );
}

export default Result;
