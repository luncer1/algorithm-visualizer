import React from "react";
import "./ButtonMain.css"

type props = {
  name: string;
  nameVariable: string;  // This prop is used to set the state variable in the parent component (App.tsx)
  setVariable: React.Dispatch<React.SetStateAction<string>>
};

function ButtonMain({ name, setVariable, nameVariable }: props) {
  return (
    <a onClick={() => setVariable(nameVariable)} className="buttonContainer"> 
        <p className="buttonText">{name}</p>
    </a>
  )
}

export default ButtonMain;
