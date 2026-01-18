import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-accent text-sm font-medium rounded-full mb-4 border border-white/10"
            >
              {subtitle}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
