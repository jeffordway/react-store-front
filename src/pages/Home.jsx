import React from "react";
import style from "./home.module.css";
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"

function Home() {
  return (
    <div className={style.wrapper}>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
