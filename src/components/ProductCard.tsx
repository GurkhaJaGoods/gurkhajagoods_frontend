import { Link } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  onSale?: boolean;
  to?: string;
}

export function ProductCard({
  id,
  title,
  image,
  originalPrice,
  salePrice,
  onSale = false,
  to = "#",
}: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to purchase:\n\n*${title}*\n*Price:* €${salePrice.toFixed(
      2
    )}\n*URL:* ${to}\n\nThank you!`
  );

  const whatsappUrl = `https://web.whatsapp.com/send?phone=%2B358417233118&text=${whatsappMessage}&app_absent=0`;

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
            alt={title}
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
              {title}
            </h3>
          </Link>

          {/* Pricing */}
          <div className="flex items-center space-x-2 mb-4">
            {onSale && (
              <span className="text-sm text-gray-500 line-through">
                €{originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              €{salePrice.toFixed(2)}
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              📱 ORDER NOW
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
