import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const heroSlides = [
  {
    title: "SPICE THINGS UP",
    description:
      "Beyond flavor, Sri Lankan spices offer health benefits, guaranteeing that the spices you receive are fresh, pure, and full of flavor.",
    imageUrl:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    buttonText: "SHOP NOW",
    icon: <ShoppingCart className="w-5 h-5 text-white" />,
  },
  {
    title: "PREMIUM QUALITY",
    description:
      "Handpicked spices from the finest sources in Sri Lanka, carefully processed to preserve their natural aroma and potency.",
    imageUrl:
      "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg",
    buttonText: "EXPLORE COLLECTION",
  },
  {
    title: "AUTHENTIC TASTE",
    description:
      "Experience the true essence of Sri Lankan cuisine with our traditional spice blends passed down through generations.",
    imageUrl:
      "https://annapurnaexpress.prixacdn.net/media/albums/edible_oil_hmIRDSAGze.jpg",
    buttonText: "LEARN MORE",
  },
];

// Animation variants
const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // Track slide direction

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setDirection(newIndex > current ? 1 : -1);
      setCurrent(newIndex);
    });
  }, [api, current]);

  const scrollTo = (index: number) => {
    const newDirection = index > current ? 1 : -1;
    setDirection(newDirection);
    api?.scrollTo(index);
  };

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}
      className="relative h-[600px] overflow-hidden">
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <AnimatePresence custom={direction}>
              <motion.section
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative h-[600px] flex items-center justify-center">
                {/* Background Image with parallax effect */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${slide.imageUrl}')`,
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <motion.div
                  className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-wider"
                    variants={contentVariants}>
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
                    variants={contentVariants}>
                    {slide.description}
                  </motion.p>
                  <motion.div variants={contentVariants}>
                    <Link to="/shop">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-md">
                        {slide.icon} {slide.buttonText}
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.section>
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/30 hover:bg-white/50 text-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/30 hover:bg-white/50 text-white" />

      {/* Animated Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: current === index ? 1.2 : 1,
              opacity: current === index ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        ))}
      </div>
    </Carousel>
  );
}
