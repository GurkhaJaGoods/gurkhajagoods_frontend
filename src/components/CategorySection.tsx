import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const categories = [
  {
    title: "Cooking Oils",
    image:
      "https://annapurnaexpress.prixacdn.net/media/albums/edible_oil_hmIRDSAGze.jpg", // Using your existing image format
    to: "/cooking-oils",
  },
  {
    title: "Spices",
    image: "https://ext.same-assets.com/1656697334/2663094617.webp", // Using your existing image format
    to: "/spices",
  },
  {
    title: "Rice & Grains",
    image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg", // Using your existing image format
    to: "/rice-grains",
  },
  {
    title: "Lentils & Pulses",
    image: "https://images.pexels.com/photos/3737639/pexels-photo-3737639.jpeg", // Using your existing image format
    to: "/lentils-pulses",
  },
];

export function CategorySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-muted-foreground mb-12">
          SHOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.to} key={category.title}>
              <Card className="relative overflow-hidden group cursor-pointer h-64 rounded-lg">
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end p-6">
                  <h3 className="text-white text-xl font-bold tracking-wide">
                    {category.title}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
