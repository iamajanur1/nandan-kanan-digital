import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  User,
  Users as UsersIcon,
  BookOpen
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Rajghat, Near Holowchowka, Mangaldai, Darrang, Assam – 784529",
    color: "bg-primary",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 8638681231",
    link: "tel:8638681231",
    color: "bg-secondary",
  },
  {
    icon: Mail,
    title: "Email",
    content: "nandankananvn@gmail.com",
    link: "mailto:nandankananvn@gmail.com",
    color: "bg-accent",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon - Sat: 8:00 AM - 3:00 PM",
    color: "bg-primary",
  },
];

const classes = [
  "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII", "Class IX", "Class X",
  "Class XI", "Class XII"
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    classApplying: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We will contact you soon.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        classApplying: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          subtitle="Contact Us"
          title="Get in Touch"
          description="Have questions about admissions or our programs? We're here to help!"
        />

        {/* Contact Info Cards */}
        <section className="py-10 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="school-card text-center"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${info.color} flex items-center justify-center`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Admission <span className="text-primary">Enquiry</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="school-card text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your enquiry has been submitted successfully. We'll contact you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="studentName" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Student Name *
                        </Label>
                        <Input
                          id="studentName"
                          required
                          placeholder="Enter student's full name"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4" />
                          Parent/Guardian Name *
                        </Label>
                        <Input
                          id="parentName"
                          required
                          placeholder="Enter parent's name"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="classApplying" className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Class Applying For *
                        </Label>
                        <Select
                          value={formData.classApplying}
                          onValueChange={(value) => setFormData({ ...formData, classApplying: value })}
                          required
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            {classes.map((cls) => (
                              <SelectItem key={cls} value={cls}>
                                {cls}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Any specific queries or information..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="xl"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Our <span className="text-primary">Location</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Visit our campus to experience our learning environment firsthand.
                </p>
                
                <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.999475!2d92.0376!3d26.4445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzQwLjIiTiA5MsKwMDInMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                  />
                </div>

                <div className="school-card">
                  <h4 className="font-semibold text-foreground mb-2">Directions</h4>
                  <p className="text-muted-foreground text-sm">
                    Located at Rajghat, near Holowchowka, easily accessible from the main road. 
                    Look for our school building with the distinctive signboard. 
                    For navigation assistance, call us at <a href="tel:8638681231" className="text-primary hover:underline">8638681231</a>.
                  </p>
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

export default Contact;
