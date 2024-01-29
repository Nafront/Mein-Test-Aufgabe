import './InputField.css';

export default function InputField ({ type, name, placeholder, value, onChange,error }) {
  return (
    <input
      type={type}
      name={name}
      className={`input ${error ? "input-error" : ""}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}