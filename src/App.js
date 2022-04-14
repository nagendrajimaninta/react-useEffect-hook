import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const [num,setNum] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNum((num) => num + 1);
    }, 1000);
  },[]);
  return (
    <div>
    <h2>The Count is : {num}</h2>
      <h1>UseEffect hook performs side effects in our component!</h1>
      <p>Some of the Examples of sideeffects are : Fetching data , Directly updating the Dom , and timers  :) {num}</p>
      <h2>UseEffect accepts two arguments one is function and second one is dependies</h2>
      <h2>The Syntax for the UseEffect Hook is : {num}</h2>
      <h2></h2>
    </div>
  );
}
