import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { BookOpen, GraduationCap, Trophy, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const courses = [
  {
    id: "primary",
    icon: BookOpen,
    title: "Primary Education",
    grades: "Classes I - V",
    color: "bg-accent",
    description: "Building strong foundations through engaging, activity-based learning that nurtures curiosity and love for knowledge.",
    highlights: [
      "Reading, writing, and numeracy fundamentals",
      "Activity-based learning approach",
      "Art, craft, and creative expression",
      "Basic environmental awareness",
      "Moral values and good habits",
      "Physical education and games",
    ],
    subjects: [
      "English Language",
      "Hindi / Assamese",
      "Mathematics",
      "Environmental Studies",
      "General Knowledge",
      "Art & Craft",
      "Physical Education",
    ],
  },
  {
    id: "secondary",
    icon: GraduationCap,
    title: "Secondary Education",
    grades: "Classes VI - X",
    color: "bg-secondary",
    description: "Developing subject depth, critical thinking, and preparing students for board examinations with focused academic guidance.",
    highlights: [
      "In-depth subject knowledge",
      "Concept clarity and application",
      "Regular assessments and feedback",
      "Board exam preparation",
      "Science practicals and experiments",
      "Personality development programs",
    ],
    subjects: [
      "English",
      "Hindi / Assamese",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science",
      "Computer Education",
      "Physical Education",
    ],
  },
  {
    id: "senior-secondary",
    icon: Trophy,
    title: "Senior Secondary Education",
    grades: "Classes XI - XII",
    color: "bg-primary",
    description: "Comprehensive board exam preparation and career guidance to help students excel in higher education and professional life.",
    highlights: [
      "Stream-based specialization",
      "Intensive board exam preparation",
      "Career counseling and guidance",
      "Competitive exam preparation support",
      "Practical lab sessions",
      "Higher education orientation",
    ],
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics / Biology",
      "English",
      "Computer Science (Optional)",
      "Physical Education",
    ],
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          subtitle="Academics"
          title="Our Academic Programs"
          description="Comprehensive education from foundation to senior secondary, designed to nurture every student's potential."
        />

        {/* Courses Overview */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-10 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Course Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center`}>
                        <course.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                          {course.title}
                        </h2>
                        <span className="text-muted-foreground">{course.grades}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <h4 className="font-semibold text-foreground mb-4">Program Highlights</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {course.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronDown className="w-4 h-4 text-primary mt-1 shrink-0 rotate-[-90deg]" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subjects Accordion */}
                  <div className={`school-card ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h4 className="font-semibold text-foreground mb-4">Subjects & Syllabus</h4>
                    <Accordion type="single" collapsible className="w-full">
                      {course.subjects.map((subject, subIndex) => (
                        <AccordionItem key={subject} value={`item-${subIndex}`}>
                          <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                            {subject}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm">
                            Comprehensive curriculum following state board guidelines with focus on 
                            conceptual understanding, practical application, and exam preparation. 
                            Regular assessments and personalized attention for every student.
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Approach */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Educational <span className="text-accent">Philosophy</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                At Nandan Kanan Vidya Niketan, we believe in student-centric learning that 
                balances academics with character building. Our approach combines traditional 
                values with modern teaching methodologies to create well-rounded individuals.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  { title: "Conceptual Learning", description: "Focus on understanding rather than rote memorization" },
                  { title: "Holistic Development", description: "Academics, sports, arts, and moral education together" },
                  { title: "Individual Attention", description: "Personalized guidance for every student's growth" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
