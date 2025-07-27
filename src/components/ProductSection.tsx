import { ProductCard } from "./ProductCard";

const newArrivals = [
  {
    id: "115",
    title: "Tilda Brocken Basmati 20kg",
    image: "https://ext.same-assets.com/1656697334/1050824483.jpeg",
    originalPrice: 35.0,
    salePrice: 26.0,
    onSale: true,
    href: "/product/tilda-brocken-basmati-20kg",
  },
  {
    id: "317",
    title: "Daawat Extra Long Basmati Rice 10 kg",
    image: "https://ext.same-assets.com/1656697334/1499012794.webp",
    originalPrice: 40.0,
    salePrice: 35.0,
    onSale: true,
    href: "/product/daawat-extra-long-basmati-rice-10-kg",
  },
  {
    id: "152",
    title: "Daawat Broken Basmati Rice 20 kg",
    image: "https://ext.same-assets.com/1656697334/4033718347.webp",
    originalPrice: 30.0,
    salePrice: 26.0,
    onSale: true,
    href: "/product/daawat-broken-basmati-rice-20-kg",
  },
  {
    id: "149",
    title: "Daawat Extra Long Basmati Rice 20 kg",
    image: "https://ext.same-assets.com/1656697334/2370278977.webp",
    originalPrice: 60.0,
    salePrice: 55.0,
    onSale: true,
    href: "/product/daawat-extra-long-basmati-rice-20-kg",
  },
];

const onDemandProducts = [
  {
    id: "330",
    title: "Chakra Ponni Boiled Rice 5kg",
    image: "https://ext.same-assets.com/1656697334/3135040609.webp",
    originalPrice: 15.0,
    salePrice: 12.0,
    onSale: true,
    href: "/product/chakra-ponni-boiled-rice-5kg",
  },
  {
    id: "324",
    title: "Chakra Sona Masuri Rice 10kg",
    image: "https://ext.same-assets.com/1656697334/3725333242.webp",
    originalPrice: 25.0,
    salePrice: 22.0,
    onSale: true,
    href: "/product/chakra-sona-masuri-rice-10kg",
  },
  {
    id: "326",
    title: "Chakra Sona Masuri Rice 5kg",
    image: "https://ext.same-assets.com/1656697334/2933963417.webp",
    originalPrice: 18.0,
    salePrice: 15.0,
    onSale: true,
    href: "/product/chakra-sona-masuri-rice-5kg",
  },
  {
    id: "152-2",
    title: "Daawat Broken Basmati Rice 20 kg",
    image: "https://ext.same-assets.com/1656697334/4033718347.webp",
    originalPrice: 30.0,
    salePrice: 26.0,
    onSale: true,
    href: "/product/daawat-broken-basmati-rice-20-kg",
  },
];

export function ProductSections() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* New Arrivals Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-muted-foreground mb-12">
            NEW ARRIVALS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* On Demand Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-muted-foreground mb-12">
            ON DEMAND
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onDemandProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
