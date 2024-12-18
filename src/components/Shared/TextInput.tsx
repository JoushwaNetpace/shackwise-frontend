import React from "react";
import { ITextInput } from "../../types/types";

const TextInput: React.FC<ITextInput> = ({
  title,
  placeHolder,
  value,
  setValue,
  type = "text", // Default type is "text"
  isPasswordField = false, // Default to false
  error,
  isNumericField, // Added numeric field prop
  maxLength,
  inputMode,
  name,
  isPasswordVisible,
  setIsPasswordVisible,
}) => {
  // State to manage password visibility

  // Function to handle numeric input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Allow only numeric characters (including spaces for credit card format)
    if (isNumericField) {
      value = value.replace(/[^0-9\s]/g, ""); // Replace any non-numeric characters except spaces
    }

    setValue(value);
  };

  return (
    <>
      <h3>
        {title} <span>*</span>
      </h3>
      <div className="input-container">
        <input
          name={name}
          type={isPasswordField && !isPasswordVisible ? "password" : type} // Use the passed type prop
          className={error ? "error-field" : ""}
          placeholder={placeHolder}
          value={value}
          onChange={handleChange} // Use the custom handleChange function
          inputMode={inputMode ? inputMode : "text"} // Use numeric input mode if numeric field
          // pattern={isNumericField ? "[0-9s]{13,19}" : undefined} // Set pattern for numeric fields (e.g., credit card)
          maxLength={maxLength ? maxLength : 100} // Limit the length for numeric input
        />
        {error && isPasswordField ? (
          <div className="error-txt">{error}</div>
        ) : (
          <></>
        )}
      </div>
      {error && !isPasswordField ? (
        <div className="error-txt">{error}</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextInput;
