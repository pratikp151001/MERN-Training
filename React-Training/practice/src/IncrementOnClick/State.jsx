import React from 'react'
import { useState } from "react";

export default function State() {
  const [value, setvalue] = useState({name:'',age:0});
  const handleClick = (msg) => {
    setvalue(previousState=>{
      return{...previousState,name:msg}
    });
  };
  return (
    <div>
      {value.name}
     <button onClick={()=>handleClick("Pratik1")}>Button</button>
      
    </div>
  )
}
