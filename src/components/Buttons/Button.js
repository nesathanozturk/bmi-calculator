function Button({ calcBmi }) {
  return (
    <div>
      <button
        type="submit"
        className="bg-[#3B3486] text-white text-xl w-80 p-2 rounded-md hover:bg-[#001253]"
        onClick={() => calcBmi()}
      >
        Calculate
      </button>
    </div>
  );
}

export default Button;
