import { CategorySection } from "@/components/CategorySection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { LatestUpdatesSection } from "@/components/LatestUpdatesSection";
import { OffersSection } from "@/components/OffersSections";
import { ProductSections } from "@/components/ProductSection";
import { TestimonialsSection } from "@/components/TestimonialsSections";
import axiosInstance from "@/config/axiosInstance";
import { useEffect } from "react";

// src/pages/Home.tsx
const Home = () => {
  const getData = () => {
    try {
      const response = axiosInstance.get("/api/products/");
      console.log("Check response", response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <button onClick={() => getData()} className="bg-red-500 p-4 rounded-4xl">
        Click
      </button>
      <HeroSection />
      <CategorySection />

      <FeaturesSection />
      <ProductSections />
      <OffersSection />
      <TestimonialsSection />
      <LatestUpdatesSection />
    </div>
  );
};

export default Home;
