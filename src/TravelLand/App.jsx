import React from "react";
import Location from "./Location/Location";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

export default function App() {
  return (
    <div>
      <Home />
      <Location />
      <Blog />
      <Footer />
    </div>
  );
}
