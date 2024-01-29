import './InputField.css';

export default function InputField ({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}