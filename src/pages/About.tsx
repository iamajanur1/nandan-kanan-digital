import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Target, Eye, BookOpen, Heart, Award, Star, CheckCircle } from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", description: "Upholding honesty and moral principles in all actions" },
  { icon: Star, title: "Respect", description: "Valuing every individual and their unique contributions" },
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in everything we do" },
  { icon: BookOpen, title: "Learning", description: "Fostering a lifelong love for knowledge and growth" },
];

const achievements = [
  "Consistent academic excellence with 98%+ pass rate",
  "Successful board exam results every year",
  "Students selected for district & state level competitions",
  "Active participation in cultural and sports events",
  "Strong community trust and parent satisfaction",
  "Modern teaching methodologies and facilities",
];

const timeline = [
  { year: "2020", title: "Foundation", description: "School established with a vision for quality education" },
  { year: "2021", title: "Growth", description: "Expanded infrastructure and welcomed more students" },
  { year: "2022", title: "Recognition", description: "First batch of board exam achievers" },
  { year: "2023", title: "Excellence", description: "Introduced senior secondary education" },
  { year: "2024", title: "Expansion", description: "New facilities and enhanced curriculum" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          subtitle="About Us"
          title="Our Story & Vision"
          description="Learn about our journey, mission, and commitment to shaping the future generation."
        />

        {/* Introduction */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building Tomorrow's <span className="text-primary">Leaders</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Nandan Kanan Vidya Niketan was established in 2020 with a clear vision: to provide 
                  quality education that combines academic excellence with strong moral values. Located 
                  in the serene environment of Mangaldai, Assam, our school has quickly become a trusted 
                  name in education.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that education is not just about textbooks and exams—it's about nurturing 
                  curious minds, building character, and preparing students for life's challenges. Our 
                  dedicated faculty, supportive environment, and comprehensive curriculum work together 
                  to create confident, knowledgeable, and responsible citizens.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="school-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To nurture disciplined, knowledgeable, and responsible citizens who contribute 
                  positively to society. We envision a community where every student reaches their 
                  full potential and becomes a beacon of knowledge and integrity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="school-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Provide quality education with modern methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Instill moral and ethical values in every student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Foster academic excellence through dedicated teaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Create a supportive environment for holistic growth</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Our Core <span className="text-accent">Values</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                These principles guide everything we do at Nandan Kanan Vidya Niketan.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
                  Achievements
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Proud <span className="text-primary">Milestones</span>
                </h2>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-12"
                    >
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {item.year.slice(-2)}
                      </div>
                      <div className="school-card">
                        <span className="text-sm font-medium text-primary">{item.year}</span>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
