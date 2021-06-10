import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import WebStack from "./components/WebStack/WebStack";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <WebStack></WebStack>
    </div>
  );
}

export default App;
