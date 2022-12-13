function Input({ label, value, setValue }) {
  return (
    <div>
      <label className="text-xl tracking-wide">{label}</label>
      <input
        type="text"
        className="bg-[#3B3486] text-white w-32 mb-4 p-2 rounded-md focus:outline-none tracking-widest"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
