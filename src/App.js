import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portifolio from "./components/portfolio/Portfolio";
import Service from "./components/service/Service";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portifolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
