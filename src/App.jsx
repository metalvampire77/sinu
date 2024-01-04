import { useState } from "react";
import HomePage from "./components/homePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Header /> */}
    <HomePage />
    <Services />
    </>
  );
}

export default App;
