import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { X, Image as ImageIcon, ZoomIn } from "lucide-react";

const galleryCategories = ["All", "Campus", "Events", "Classroom", "Sports", "Cultural"];

const galleryItems = [
  { id: 1, title: "School Building", category: "Campus", size: "large" },
  { id: 2, title: "Main Entrance", category: "Campus", size: "medium" },
  { id: 3, title: "Playground", category: "Campus", size: "small" },
  { id: 4, title: "Annual Day", category: "Events", size: "medium" },
  { id: 5, title: "Science Exhibition", category: "Events", size: "large" },
  { id: 6, title: "Classroom Learning", category: "Classroom", size: "small" },
  { id: 7, title: "Computer Lab", category: "Classroom", size: "medium" },
  { id: 8, title: "Sports Day", category: "Sports", size: "large" },
  { id: 9, title: "Cricket Match", category: "Sports", size: "small" },
  { id: 10, title: "Dance Performance", category: "Cultural", size: "medium" },
  { id: 11, title: "Prize Distribution", category: "Events", size: "small" },
  { id: 12, title: "Library", category: "Campus", size: "medium" },
  { id: 13, title: "Music Class", category: "Cultural", size: "small" },
  { id: 14, title: "Art Exhibition", category: "Cultural", size: "large" },
  { id: 15, title: "Morning Assembly", category: "Events", size: "medium" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          subtitle="Gallery"
          title="Life at Our School"
          description="Explore glimpses of our vibrant campus, activities, events, and memorable moments."
        />

        {/* Gallery Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow-green"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                      item.size === "large" ? "md:col-span-2 md:row-span-2" :
                      item.size === "medium" ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                    onClick={() => setSelectedImage(item.id)}
                  >
                    <div className={`aspect-square bg-gradient-to-br from-primary/70 to-primary/50 flex items-center justify-center ${
                      item.size === "large" ? "md:aspect-auto md:h-full md:min-h-[300px]" : ""
                    }`}>
                      <div className="text-center text-white p-4">
                        <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-60" />
                        <p className="font-medium">{item.title}</p>
                        <span className="text-xs text-white/70">{item.category}</span>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-10 text-sm italic"
            >
              Images shown are placeholders. Actual school photographs will be displayed here.
            </motion.p>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl w-full aspect-video bg-gradient-to-br from-primary/80 to-primary/60 rounded-2xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center text-white">
                  <ImageIcon className="w-20 h-20 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-medium">
                    {galleryItems.find(item => item.id === selectedImage)?.title}
                  </p>
                  <span className="text-sm text-white/70">
                    {galleryItems.find(item => item.id === selectedImage)?.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
