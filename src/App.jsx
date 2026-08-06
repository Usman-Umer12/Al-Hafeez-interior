import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Categories from "./components/Categories";
import ProductsSection from "./components/ProductsSection";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Products from "./pages/Products";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";

function HomePage() {
  return (
    <>
      <Navbar />

      <Home />
      <Collection />
      <Categories />
      <ProductsSection />
      <Features />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<HomePage />} />

      {/* PRODUCTS PAGE */}
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about" element={<About />} />
    </Routes>

    
  );
}

export default App;