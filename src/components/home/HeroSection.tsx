import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 hero-gradient">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl animate-pulse-glow" />
              <img
                src={logo}
                alt="Nandan Kanan Vidya Niketan"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full shadow-elevated border-4 border-white/20"
              />
            </div>
          </motion.div>

          {/* School Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-6 border border-white/10">
              Senior Secondary School
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Quality Education with
            <span className="block gradient-text-gold">Values, Discipline & Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Nandan Kanan Vidya Niketan is dedicated to academic excellence, moral values, 
            and holistic development in a safe and nurturing environment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/admissions">
              <Button variant="hero" size="xl" className="group">
                Enquire for Admission
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:8638681231">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Contact School
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "5+", label: "Years of Excellence" },
              { value: "500+", label: "Happy Students" },
              { value: "30+", label: "Expert Teachers" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
