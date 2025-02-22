import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
      <Router>
        <Header></Header>
        <Routes>
          {/* Define your pages here */}
        </Routes>
      </Router>
  );
};

export default App;
