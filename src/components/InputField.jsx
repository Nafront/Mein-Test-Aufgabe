import './InputField.css';
import { useState } from 'react';

export default function InputField ({ type, name, placeholder, value, onChange,error }) {
 const [isFocused, setIsFocused] = useState(false);

 const handleFocus = () => {
   setIsFocused(true);
 };

 const handleBlur = () => {
   if (!value) {
     setIsFocused(false);
   }
 };
  return (
    <input
      type={type}
      name={name}
      className={`input ${error ? "input-error" : ""}`}
      style={{
        border: isFocused
          ? "2px solid #yourFocusedColor"
          : "1px solid #yourNormalColor",
        backgroundColor: isFocused ? "#DAE1EC" : "",
      }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}