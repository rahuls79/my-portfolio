import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReviewSection from "./components/ReviewSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedWork />
      <ContactForm />
      {/* <ReviewSection /> */}
      <Footer />
    </div>
  );
}

export default App;
