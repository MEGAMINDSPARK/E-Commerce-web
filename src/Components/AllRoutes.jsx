import { Routes, Route } from "react-router-dom";
import Store from "./Store";
import About from "./About";
import Home from "./Home";


export default function AllRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
