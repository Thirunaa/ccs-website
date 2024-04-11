import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import RouteNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <header>
            <Navbar />
          </header>
          <br />
          <br />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/ourservices" element={<OurServices />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
