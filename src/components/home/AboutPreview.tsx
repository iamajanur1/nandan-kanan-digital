import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: BookOpen, title: "Quality Education", description: "Modern curriculum with traditional values" },
  { icon: Award, title: "Academic Excellence", description: "Consistent outstanding results" },
  { icon: Users, title: "Expert Faculty", description: "Dedicated and qualified teachers" },
  { icon: Heart, title: "Nurturing Environment", description: "Safe and supportive atmosphere" },
];

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Our School
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Shaping Future
              <span className="text-primary block">Leaders & Thinkers</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nandan Kanan Vidya Niketan focuses on developing knowledgeable, disciplined, 
              and confident students through quality education and value-based learning. 
              We believe in nurturing not just academic excellence, but character and integrity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded in 2020, our school has quickly established itself as a beacon of 
              quality education in Mangaldai, Assam. We combine modern teaching methodologies 
              with traditional Indian values to create well-rounded individuals.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg" className="group">
                Read More About Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="school-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
