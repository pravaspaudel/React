import React from "react";
import Navigation from "./components/navigation";
import Body from "./components/Body";
import Analyte from "./components/Analyte";
import "./App.css";
import Thirdpage from "./components/thirdpage";

function App() {
  return (
    <>
      <Navigation />
      <Body />
      <Analyte />
      <Thirdpage />
    </>
  );
}

export default App;
