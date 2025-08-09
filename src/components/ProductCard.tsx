import { Link } from "react-router-dom";
import { Heart, InfoIcon, LucideShoppingCart, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import Cart from "./Cart";
import ProductItemDetail from "@/pages/ProductItemDetails";

interface ProductCardProps {
  product: any;
  id: any;
  name: string;
  image: string;
  price: any;
  sale_price: any;
  quantity_in_stock: any;
  status?: string;
  onSale?: boolean;
  to?: string;
}

export function ProductCard({
  product,
  id,
  name,
  image,
  price,
  sale_price,
  quantity_in_stock,
  status = "in_stock",
  onSale = true,
  to = "#",
}: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to purchase:\n\n*${name}*\n*Price:* €${sale_price}}\n*URL:* ${to}\n\nThank you!`
  );

  const whatsappUrl = `https://web.whatsapp.com/send?phone=%2B358417233118&text=${whatsappMessage}&app_absent=0`;
  console.log("check quantity in stock", quantity_in_stock);
  console.log("check product", product);

  const addToCart = () => {
    const cartItems = JSON.parse(
      (typeof localStorage !== "undefined" &&
        localStorage.getItem("CartItems")) ||
        "[]"
    );
    const existingProductIndex = cartItems.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If product exists, update the quantity
      cartItems[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it to the cart
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.sale_price || product.price, // use sale price if available
        image: product.image,
        quantity: 1,
      });
    }

    // Save the updated cart items to local storage
    typeof localStorage !== "undefined" &&
      localStorage.setItem("CartItems", JSON.stringify(cartItems));
  };
  return (
    <Card className="group relative overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Sale Badge */}
      {onSale && (
        <Badge className="absolute top-3 left-3 z-10 bg-primary text-white">
          Sale!
        </Badge>
      )}

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white">
        <Heart className="h-4 w-4" />
      </Button>

      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="icon"
                className="bg-white/90 hover:bg-white">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <Link to={to}>
            <h3 className="font-medium text-gray-900 hover:text-primary transition-colors duration-200 mb-3">
              {name}
            </h3>
          </Link>

          {/* Pricing */}
          <div className="flex items-center space-x-2 mb-4">
            {onSale && (
              <span className="text-sm text-gray-500 line-through">
                €{price}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              €{sale_price}
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <div className="flex flex-col space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  onClick={addToCart}
                  className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <LucideShoppingCart /> Add to Cart
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className={"overflow-auto"}>
                  <DialogDescription>
                    <Cart />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  onClick={addToCart}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  <InfoIcon /> View Details
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className={"overflow-auto"}>
                  <DialogDescription>
                    <ProductItemDetail product={product} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-2 text-sm">
            Status:{" "}
            <span
              className={
                status === "in_stock" ? "text-green-500" : "text-red-500"
              }>
              {status.replace("_", " ")}
            </span>
            {quantity_in_stock > 0 && (
              <span> ({quantity_in_stock} available)</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
