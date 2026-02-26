import React from "react";
import Home from "./Home";
import Category from "./Category";
import Newarrivals from "./Newarrivals";
import Service from "./Service";

function HomePage() {
  return (
    <>
      <div id="home">
        <Home />
      </div>

      <div id="categories">
        <Category />
      </div>

      <div id="newarrivals">
        <Newarrivals />
      </div>

      <div id="services">
        <Service />
      </div>
    </>
  );
}

export default HomePage;