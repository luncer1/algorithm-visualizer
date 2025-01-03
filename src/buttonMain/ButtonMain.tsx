import React from "react";
import "./ButtonMain.css";

type props = {
  name: string;
  nameVariable: string; // This prop is used to set the state variable in the parent component (App.tsx)
  setVariable: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
};

function ButtonMain({
  name,
  setVariable,
  nameVariable,
  disabled = false,
}: props) {
  return (
    <a
      onClick={() => (disabled ? "" : setVariable(nameVariable))}
      className={disabled ? "buttonDisabled" : "buttonContainer"}
    >
      <p className="buttonText">{name}</p>
    </a>
  );
}

export default ButtonMain;
