import React,{useState} from "react";

function Toggle() {
  const[isOn,setToggle] = useState(false)
  function handleClick( ) {
    setToggle((isOn)=>!isOn)
  }
  const color= isOn?"red":"orange"
  return <button style={{backgroundColor:color}} onClick={handleClick}>{isOn?"ON":"OFF"}</button>;
}

export default Toggle;
