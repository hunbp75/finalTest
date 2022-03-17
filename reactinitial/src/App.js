import React from "react";
import Fetch from "./components/Fetch";
import Laptops from "./components/Laptops";

const App = () => {
  return (
    <div>
      <h1>Laptops</h1>
      <Fetch />
      <h1>Short</h1>
    </div>
  );
};

export default App;
