import "./App.css";
import { useState } from "react";

import IncrementOnClick from "./IncrementOnClick/IncrementOnClick";
import IncrementOnClickClassComonent from "./IncrementOnClick/IncrementOnClickClassComonent";
import State from "./IncrementOnClick/State";

function App() {
  const [count, setcount] = useState(0);
  const sendcount = (num) => {
    setcount(count + num);
  };

  const [msg, setmsg] = useState("");
  const sendmsg = (msg) => {
    setmsg(msg);
  };

  return (
    <div className="App">
      <h2>Button Click:{count}</h2>
      <IncrementOnClick Clicked={sendcount} />
      {msg}
      <IncrementOnClickClassComonent MSG={sendmsg} />
      <State/>
    </div>
  );
}

export default App;
