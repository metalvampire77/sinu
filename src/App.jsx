import { useState } from "react";
import HomePage from "./components/homePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Projects from "./components/projects/Projects";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import ContactUs from "./components/contact/ContactUs.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomePage />
      <Services />
      <Projects />
      <Statistics />
      <ContactUs />
    </>
  );
}

export default App;
