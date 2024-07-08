import { useEffect } from "react";
import {
  Hero,
  About,
  Result,
  Leader,
  Slider,
  Leading,
  Mission,
  OurAbout,
  Experience,
} from "./components";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <OurAbout />
      <Leading />
      <Slider />
      <Mission />
      <Result />
      <Experience />
      <Leader />
    </>
  );
};

export default Home;
