import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  };

  return (
    <div>
      <h2>Password Generator</h2>

      <input
        type="text"
        id="password"
        value={password}
        readOnly
        style={{
          margin: "20px",
          padding: "10px",
          fontSize: "18px",
          border: "1px solid #ccc",
          width: "300px",
          userSelect: "all",
        }}
      />

      <button
        onClick={generatePassword}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate Password
      </button>

      <button
        onClick={copyToClipboard}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default PasswordGenerator;
