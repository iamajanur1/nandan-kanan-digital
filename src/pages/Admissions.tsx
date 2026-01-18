import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  ClipboardCheck, 
  CheckCircle, 
  AlertCircle,
  Phone,
  ArrowRight,
  Calendar
} from "lucide-react";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Enquiry Submission",
    description: "Fill out the enquiry form online or visit the school to express interest in admission.",
  },
  {
    step: 2,
    icon: Users,
    title: "Counselling & Guidance",
    description: "Meet with our admission counselors to understand the curriculum, facilities, and requirements.",
  },
  {
    step: 3,
    icon: ClipboardCheck,
    title: "Document Verification",
    description: "Submit required documents including previous academic records, birth certificate, and photographs.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Admission Confirmation",
    description: "Upon successful verification and fee payment, receive the admission confirmation letter.",
  },
];

const documents = [
  "Birth Certificate (Original & Copy)",
  "Previous School Transfer Certificate",
  "Last Year's Mark Sheet / Report Card",
  "Passport Size Photographs (4 copies)",
  "Aadhar Card Copy (Student & Parents)",
  "Address Proof",
  "Caste Certificate (if applicable)",
];

const classInfo = [
  { class: "Class I", age: "5-6 years", note: "Fresh admission" },
  { class: "Class II-V", age: "6-10 years", note: "Transfer admission" },
  { class: "Class VI-VIII", age: "11-13 years", note: "Based on entrance test" },
  { class: "Class IX-X", age: "14-15 years", note: "Subject to availability" },
  { class: "Class XI-XII", age: "16-17 years", note: "Based on Class X results" },
];

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          subtitle="Admissions"
          title="Join Our School Family"
          description="Begin your child's journey towards excellence with quality education and value-based learning."
        />

        {/* Notice Banner */}
        <section className="bg-secondary py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 text-secondary-foreground">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="font-medium text-center">
                <span className="hidden sm:inline">Admissions Open for Academic Session 2025-26 | </span>
                Limited seats available. Apply early!
              </p>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Step by Step
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Admission <span className="text-primary">Process</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
                
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="relative flex gap-6 md:gap-8"
                    >
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-glow-green">
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div className="school-card flex-1">
                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium mb-2">
                          Step {step.step}
                        </span>
                        <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Documents */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Class-wise Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Class-wise <span className="text-primary">Eligibility</span>
                </h2>
                <div className="space-y-4">
                  {classInfo.map((info, index) => (
                    <motion.div
                      key={info.class}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="school-card p-4"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{info.class}</h4>
                          <p className="text-sm text-muted-foreground">Age: {info.age}</p>
                        </div>
                        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {info.note}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  * Admissions are granted based on eligibility, seat availability, and school norms.
                </p>
              </motion.div>

              {/* Required Documents */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Required <span className="text-primary">Documents</span>
                </h2>
                <div className="school-card">
                  <ul className="space-y-3">
                    {documents.map((doc, index) => (
                      <motion.li
                        key={doc}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{doc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <Calendar className="w-14 h-14 mx-auto mb-6 text-accent" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-accent">Apply?</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Take the first step towards quality education. Contact us today or 
                visit our campus to learn more about the admission process.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    Apply for Admission
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:8638681231">
                  <Button variant="heroOutline" size="xl">
                    <Phone className="w-5 h-5" />
                    Call: 8638681231
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
