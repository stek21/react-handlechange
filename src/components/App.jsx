import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleClick() {
    setHeadingText(`Hello ${name}`);
  }


  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value={name} />
      <button style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >
      Submit</button>
    </div>
  );
}

export default App;
