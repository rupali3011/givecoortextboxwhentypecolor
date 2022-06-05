import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [bg, setbg] = useState("");
  function colorchange(event) {
    setbg(event.target.value);
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={colorchange}
        style={{ backgroundColor: bg }}
      />
    </div>
  );
}
