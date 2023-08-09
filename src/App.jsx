import React from "react";

import Navbar from "./Pages/Home/Navbar";
import Banner from "./Pages/Home/Banner";
import BestSeller from "./Pages/Home/BestSeller";
import WhyChoseUs from "./Pages/Home/WhyChoseUs";
import OurCustomers from "./Pages/Home/OurCustomers";

import "./styles/App.css";

function App() {
  

  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <BestSeller/>
      <WhyChoseUs/>
      <OurCustomers/>
    </div>
  );
}

export default App;
