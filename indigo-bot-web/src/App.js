import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Chainlit from "./components/Chainlit";
import Footer from "./components/Footer";
import MapComponent from "./components/Map";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar />
                <div className="mainLayout">
                  <Chainlit />
                  <MapComponent />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/#/about" element={<About />} />
          <Route path="/#/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
