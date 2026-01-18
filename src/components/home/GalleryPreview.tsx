import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  { title: "Campus View", size: "large" },
  { title: "Classroom", size: "small" },
  { title: "Sports Day", size: "small" },
  { title: "Annual Function", size: "medium" },
  { title: "Science Lab", size: "medium" },
];

export const GalleryPreview = () => {
  return (
    <section className="section-padding bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            School Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Life at <span className="text-primary">Our School</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Glimpses of our vibrant campus, activities, and memorable moments.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' :
                index === 3 ? 'md:col-span-2 aspect-video' :
                'aspect-square'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link to="/gallery">
            <Button variant="default" size="lg" className="group">
              View Full Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
