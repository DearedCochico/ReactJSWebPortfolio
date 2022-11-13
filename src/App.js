import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./styles.scss";

function App() {
  return (
    <div>
      <Router>
        <Header />
     
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
