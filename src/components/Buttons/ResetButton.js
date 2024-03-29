function ResetButton() {
  return (
    <div>
      <button
        className="bg-[#3B3486] text-white text-xl w-80 p-2 rounded-md hover:bg-[#001253]"
        onClick={() => window.location.reload()}
      >
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
