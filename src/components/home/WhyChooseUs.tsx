import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Shield, 
  Heart, 
  Trophy, 
  Users, 
  MessageCircle 
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description: "Qualified and dedicated faculty committed to student success",
  },
  {
    icon: Shield,
    title: "Strong Discipline",
    description: "Structured environment fostering respect and responsibility",
  },
  {
    icon: Heart,
    title: "Value-Based Education",
    description: "Moral and ethical values integrated into daily learning",
  },
  {
    icon: Trophy,
    title: "Cultural & Sports",
    description: "Diverse activities for holistic personality development",
  },
  {
    icon: Users,
    title: "Student-Friendly",
    description: "Supportive atmosphere encouraging growth and confidence",
  },
  {
    icon: MessageCircle,
    title: "Parent Interaction",
    description: "Regular assessments and transparent communication",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-accent rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Makes Us <span className="text-accent">Different</span>
          </h2>
          <p className="text-white/80 text-lg">
            We go beyond academics to create well-rounded individuals ready for life's challenges.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-white/70 text-sm">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
