import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Programmes from "@/pages/Programmes";
import About from "@/pages/About";
import FoundersNote from "@/pages/FoundersNote";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders-note" element={<FoundersNote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
