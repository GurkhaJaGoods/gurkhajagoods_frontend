import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://ext.same-assets.com/1656697334/2018040163.png",
    rating: 5,
    title: "Excellent Service",
    review:
      "The quality products are exactly as described, and the delivery was on time..",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    title: "Excellent Service",
    review:
      "The quality products are exactly as described, and the delivery was on time..",
  },
];

export function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-[#e8e2ad] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8d5540] mb-12">
          WHAT OUR CUSTOMERS ARE SAYING
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white">
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white">
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 px-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#8d5540]"></div>
            <div className="w-3 h-3 rounded-full bg-[#8d5540]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#8d5540]/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
