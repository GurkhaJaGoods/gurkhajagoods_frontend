import { motion, type Variants } from "framer-motion";
import { Truck, HeadphonesIcon, DollarSign, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free Delivery On All Orders.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Service",
    description: "Enjoy Friendly Customer Service.",
  },
  {
    icon: DollarSign,
    title: "Lowest Price",
    description: "Get The Lowest Prices On All Products.",
  },
  {
    icon: Award,
    title: "Quality Products",
    description: "Discover Quality Products.",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const featureVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-16 bg-primary text-white overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-24 text-background fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={featureVariants}>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  transition={{ duration: 0.2 }}>
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
