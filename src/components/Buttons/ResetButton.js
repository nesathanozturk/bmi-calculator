function ResetButton() {
  return (
    <div>
      <button
        className="bg-[#3B3486] text-white text-md w-44 p-2 rounded-md hover:bg-[#001253]"
        onClick={() => window.location.reload()}
      >
        Clear
      </button>
    </div>
  );
}

export default ResetButton;
