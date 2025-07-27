import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
          SPICE THINGS UP
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Beyond flavor, Sri Lankan spices offer health benefits, guaranteeing
          that the spices you receive are fresh, pure, and full of flavor.
        </p>
        <Link to="/shop">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-md">
            🛒 SHOP NOW
          </Button>
        </Link>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
}
