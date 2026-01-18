import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Mail, Award, BookOpen, Users, Star } from "lucide-react";

const teachers = [
  { name: "Principal", role: "School Head", subject: "Administration & Leadership", initials: "P", color: "from-primary to-primary/80" },
  { name: "Vice Principal", role: "Academic Head", subject: "Senior Faculty", initials: "VP", color: "from-secondary to-secondary/80" },
  { name: "Head Teacher", role: "Primary Section", subject: "English & EVS", initials: "HT", color: "from-accent to-accent/80" },
  { name: "Senior Teacher", role: "Science Faculty", subject: "Physics & Chemistry", initials: "ST", color: "from-primary to-primary/80" },
  { name: "Senior Teacher", role: "Mathematics", subject: "Mathematics", initials: "ST", color: "from-secondary to-secondary/80" },
  { name: "Teacher", role: "Languages", subject: "Hindi & Assamese", initials: "T", color: "from-accent to-accent/80" },
  { name: "Teacher", role: "Social Studies", subject: "History & Geography", initials: "T", color: "from-primary to-primary/80" },
  { name: "Teacher", role: "Biology", subject: "Life Sciences", initials: "T", color: "from-secondary to-secondary/80" },
  { name: "Teacher", role: "Computer Science", subject: "IT & Computing", initials: "T", color: "from-accent to-accent/80" },
  { name: "Teacher", role: "Physical Education", subject: "Sports & Fitness", initials: "PE", color: "from-primary to-primary/80" },
  { name: "Teacher", role: "Art & Craft", subject: "Creative Arts", initials: "T", color: "from-secondary to-secondary/80" },
  { name: "Teacher", role: "Music", subject: "Cultural Activities", initials: "T", color: "from-accent to-accent/80" },
];

const qualities = [
  { icon: Award, title: "Qualified & Experienced", description: "All our teachers hold relevant degrees and have years of teaching experience" },
  { icon: BookOpen, title: "Continuous Learning", description: "Regular training and workshops to stay updated with modern teaching methods" },
  { icon: Users, title: "Student-Centric", description: "Dedicated to understanding and nurturing each student's unique potential" },
  { icon: Star, title: "Passionate Educators", description: "Love for teaching that inspires students to achieve excellence" },
];

const Teachers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          subtitle="Our Team"
          title="Meet Our Faculty"
          description="Dedicated educators committed to nurturing every student's academic and personal growth."
        />

        {/* Introduction */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our experienced teachers are the backbone of Nandan Kanan Vidya Niketan. 
                With passion, dedication, and expertise, they create an engaging learning 
                environment where every student thrives. They don't just teach subjects—they 
                shape futures.
              </p>
            </motion.div>

            {/* Faculty Qualities */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="school-card text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <quality.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground text-sm">{quality.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Teachers Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-primary">Teaching Staff</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={`${teacher.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="school-card text-center h-full">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${teacher.color} flex items-center justify-center text-2xl font-serif font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {teacher.initials}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {teacher.name}
                    </h4>
                    <p className="text-sm text-primary font-medium mb-1">{teacher.role}</p>
                    <p className="text-xs text-muted-foreground">{teacher.subject}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Our Teaching Family
              </h2>
              <p className="text-muted-foreground mb-6">
                Are you a passionate educator looking for an opportunity to make a difference? 
                We're always looking for dedicated teachers to join our team.
              </p>
              <a
                href="mailto:nandankananvn@gmail.com?subject=Teaching Position Inquiry"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <Mail className="w-5 h-5" />
                Send us your resume at nandankananvn@gmail.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teachers;
