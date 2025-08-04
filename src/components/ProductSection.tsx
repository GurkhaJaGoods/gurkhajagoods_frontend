import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getProductLists } from "@/api/public/productlist";
import type { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

const newArrivals = [
  {
    id: "115",
    name: "Tilda Brocken Basmati 20kg",
    image: "https://ext.same-assets.com/1656697334/1050824483.jpeg",
    price: 35.0,
    sale_price: 26.0,
    onSale: true,
    href: "/product/tilda-brocken-basmati-20kg",
  },
  {
    id: "317",
    name: "Daawat Extra Long Basmati Rice 10 kg",
    image: "https://ext.same-assets.com/1656697334/1499012794.webp",
    price: 40.0,
    sale_price: 35.0,
    onSale: true,
    href: "/product/daawat-extra-long-basmati-rice-10-kg",
  },
  {
    id: "152",
    name: "Daawat Broken Basmati Rice 20 kg",
    image: "https://ext.same-assets.com/1656697334/4033718347.webp",
    price: 30.0,
    sale_price: 26.0,
    onSale: true,
    href: "/product/daawat-broken-basmati-rice-20-kg",
  },
  {
    id: "149",
    name: "Daawat Extra Long Basmati Rice 20 kg",
    image: "https://ext.same-assets.com/1656697334/2370278977.webp",
    price: 60.0,
    sale_price: 55.0,
    onSale: true,
    href: "/product/daawat-extra-long-basmati-rice-20-kg",
  },
];

const onDemandProducts = [
  {
    id: "330",
    name: "Chakra Ponni Boiled Rice 5kg",
    image: "https://ext.same-assets.com/1656697334/3135040609.webp",
    price: 15.0,
    sale_price: 12.0,
    onSale: true,
    href: "/product/chakra-ponni-boiled-rice-5kg",
  },
  {
    id: "324",
    name: "Chakra Sona Masuri Rice 10kg",
    image: "https://ext.same-assets.com/1656697334/3725333242.webp",
    price: 25.0,
    sale_price: 22.0,
    onSale: true,
    href: "/product/chakra-sona-masuri-rice-10kg",
  },
  {
    id: "326",
    name: "Chakra Sona Masuri Rice 5kg",
    image: "https://ext.same-assets.com/1656697334/2933963417.webp",
    price: 18.0,
    sale_price: 15.0,
    onSale: true,
    href: "/product/chakra-sona-masuri-rice-5kg",
  },
  {
    id: "152-2",
    name: "Daawat Broken Basmati Rice 20 kg",
    image: "https://ext.same-assets.com/1656697334/4033718347.webp",
    price: 30.0,
    sale_price: 26.0,
    onSale: true,
    href: "/product/daawat-broken-basmati-rice-20-kg",
  },
];

export function ProductSections() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProductLists,
  });
  console.log("Check waht is in products", products);
  if (isLoading) return <div>Loading products...</div>;
  if (error)
    return <div>Error loading products: {(error as Error).message}</div>;

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* New Arrivals Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products?.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-3"
              />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>

              <div className="mt-2 flex justify-between items-center">
                <span className="text-red-500 font-bold">
                  ${product.sale_price}
                  {product.price !== product.sale_price && (
                    <span className="ml-2 text-gray-400 line-through">
                      ${product.price}
                    </span>
                  )}
                </span>
                <span className="text-sm">
                  {product.weight}
                  {product.weight_unit}
                </span>
              </div>

              <div className="mt-2 text-sm">
                Status:{" "}
                <span
                  className={
                    product.status === "in_stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }>
                  {product.status.replace("_", " ")}
                </span>
                {product.quantity_in_stock > 0 && (
                  <span> ({product.quantity_in_stock} available)</span>
                )}
              </div>
            </div>
          ))}
        </div> */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-muted-foreground mb-12">
            NEW ARRIVALS
          </h2>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((product: Product) => (
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
              <ProductCard
                quantity_in_stock={undefined}
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
