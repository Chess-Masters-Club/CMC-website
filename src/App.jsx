import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
