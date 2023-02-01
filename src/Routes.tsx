// import { Routes as Router, Route } from "react-router";
import { Routes as Router, Route } from "react-router-dom";
import { Body } from "./components/layout";
// import App from "./App";
// import { Body } from "./components/layout";
import StopWatch from "./components/Stopwatch";
import AboutUs from "./pages/ABoutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

const Routes = () => {
  console.log("Routes");
  return (
    // <Router>
    //   <Route path="/" element={<App />} />
    // </Router>

    <Router>
      <Route path="/" element={<Home />}>
        <Route path="" element={<StopWatch /> } />
        <Route path="/about" element={<AboutUs /> } />
        {/* <Route path="/about" element={<Body /> } /> */}
        <Route path="/contact" element={<ContactUs/> } />
      </Route>
      <Route path="*" element={<Home />} />
    </Router>

  );
}

export default Routes;