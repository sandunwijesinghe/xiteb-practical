import React from "react";
import Destinations from "../components/Destinations";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Offers from "../components/Offers";
import Slider from "../components/Slider";

function Home() {
  return (
    <div style={{ alignItems: "center" }}>
      <Header />
      <Slider />

      <Destinations />

      <Experience />
      <Offers />
      <Footer />
    </div>
  );
}

export default Home;
