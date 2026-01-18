import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teachers = [
  { name: "Expert Faculty", role: "Mathematics & Science", initials: "EF" },
  { name: "Senior Teacher", role: "English & Literature", initials: "ST" },
  { name: "Lead Educator", role: "Social Studies", initials: "LE" },
  { name: "Head Teacher", role: "Primary Section", initials: "HT" },
];

export const TeachersPreview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Teachers Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 order-2 lg:order-1"
          >
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`school-card text-center ${index % 2 === 1 ? 'mt-6' : ''}`}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl font-serif font-bold text-primary-foreground shadow-lg">
                  {teacher.initials}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{teacher.name}</h4>
                <p className="text-sm text-muted-foreground">{teacher.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Our Faculty
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-secondary">Dedicated</span> Teachers
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our experienced teachers are the backbone of our institution. They are dedicated 
              to nurturing every student's academic and personal growth with passion and expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With years of experience in education and a commitment to excellence, our faculty 
              creates an engaging learning environment where students thrive and discover their 
              true potential.
            </p>
            <Link to="/teachers">
              <Button variant="red" size="lg" className="group">
                Meet All Teachers
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
