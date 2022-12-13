function Input({ label, value, setValue }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        className=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
