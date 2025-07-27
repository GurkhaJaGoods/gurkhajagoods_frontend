import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function OffersSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-muted-foreground mb-12">
          OFFERS
        </h2>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="relative">
                <img
                  src="https://ext.same-assets.com/1656697334/2159500145.webp"
                  alt="Blue printed sarong - elephant2"
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>

              {/* Product Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Blue printed sarong – elephant2
                </h3>

                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl font-bold text-primary">
                    €17.00
                  </span>
                  <span className="text-lg text-gray-500">–</span>
                  <span className="text-2xl font-bold text-primary">
                    €22.00
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Elegant Design:
                      </span>
                      <span className="text-gray-600 ml-1">
                        Fresh and modern, yet rooted in tradition.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Best Quality Fabric:
                      </span>
                      <span className="text-gray-600 ml-1">
                        Soft, breathable, and comfortable for all-day wear.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Trending Style:
                      </span>
                      <span className="text-gray-600 ml-1">
                        A fashion-forward choice that's perfect for any
                        occasion.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-6">
                  <p>
                    <strong>SKU:</strong> N/A
                  </p>
                  <p>
                    <strong>Categories:</strong> Batik, Fashion, For HIM, Kids,
                    New Arrivals
                  </p>
                </div>

                <Link to="/product/blue-printed-sarong-elephant2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    READ MORE
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-900"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
