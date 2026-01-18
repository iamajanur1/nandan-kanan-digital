import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: BookOpen,
    title: "Primary Education",
    grades: "Classes I - V",
    description: "Building strong foundations through reading, writing, numeracy, and nurturing creativity & curiosity in young minds.",
    color: "bg-accent",
    hoverColor: "group-hover:bg-accent",
  },
  {
    icon: GraduationCap,
    title: "Secondary Education",
    grades: "Classes VI - X",
    description: "Developing subject depth, concept clarity, and preparing students for board examinations with focused assessment.",
    color: "bg-secondary",
    hoverColor: "group-hover:bg-secondary",
  },
  {
    icon: Trophy,
    title: "Senior Secondary",
    grades: "Classes XI - XII",
    description: "Board exam preparation, career guidance, and building readiness for higher education and professional success.",
    color: "bg-primary",
    hoverColor: "group-hover:bg-primary",
  },
];

export const CoursesPreview = () => {
  return (
    <section className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Curriculum
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-primary">Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive education from foundation to higher secondary, designed to nurture 
            every student's potential.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="school-card h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm font-medium text-muted-foreground mb-2">{course.grades}</span>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground flex-1 mb-5">{course.description}</p>
                <Link to="/courses" className="inline-flex items-center text-primary font-medium group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
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
          className="text-center mt-12"
        >
          <Link to="/courses">
            <Button variant="outline" size="lg">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
