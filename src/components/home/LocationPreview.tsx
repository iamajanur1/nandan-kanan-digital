import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const LocationPreview = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Find Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visit Our <span className="text-primary">Campus</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Located in the heart of Mangaldai, easily accessible from all parts of Darrang district.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="school-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Rajghat, Near Holowchowka,<br />
                    Mangaldai, Darrang,<br />
                    Assam – 784529
                  </p>
                </div>
              </div>
            </div>

            <div className="school-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <a href="tel:8638681231" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8638681231
                  </a>
                </div>
              </div>
            </div>

            <div className="school-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a href="mailto:nandankananvn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    nandankananvn@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="school-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">School Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Monday - Saturday<br />
                    8:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.999475!2d92.0376!3d26.4445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzQwLjIiTiA5MsKwMDInMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
