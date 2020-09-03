import React from "react";

import Main from "./Components/Main";
import Header from "./Components/Header";

function App() {
  return (
    <div
      style={{ backgroundColor: "teal" }}
      className="min-vh-100 position-relative"
    >
      <Header />

      <Main />
    </div>
  );
}

export default App;
