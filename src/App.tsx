import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HeroSection } from "./components/HeroSection";
import { CategorySection } from "./components/CategorySection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProductSections } from "./components/ProductSection";
import { OffersSection } from "./components/OffersSections";
import { TestimonialsSection } from "./components/TestimonialsSections";
import { LatestUpdatesSection } from "./components/LatestUpdatesSection";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <CategorySection />

        <FeaturesSection />
        <ProductSections />
        <OffersSection />
        <TestimonialsSection />
        <LatestUpdatesSection />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<HeroSection />} />
            <Route path="/category" element={<CategorySection />} /> */}
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
