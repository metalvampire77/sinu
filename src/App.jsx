import { useState } from "react";
import HomePage from "./components/homePage.jsx/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/nav" Component={Header}></Route>
        <Route path="/" Component={HomePage}></Route>
      </Routes>
    </Router>
  );
}

export default App;
