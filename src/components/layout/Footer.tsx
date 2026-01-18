import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const courses = [
  { name: "Primary Education", path: "/courses" },
  { name: "Secondary Education", path: "/courses" },
  { name: "Senior Secondary", path: "/courses" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Nandan Kanan Vidya Niketan"
                className="w-16 h-16 rounded-full shadow-lg border-2 border-white/20"
              />
              <div>
                <h3 className="font-serif font-bold text-lg">Nandan Kanan</h3>
                <p className="text-sm text-white/70">Vidya Niketan</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Nurturing disciplined, knowledgeable, and responsible citizens through 
              quality education, moral values, and holistic development.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <h4 className="font-serif font-bold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="font-serif font-bold text-lg">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-white/80 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <h4 className="font-serif font-bold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-accent shrink-0" />
                <span className="text-white/80 text-sm">
                  Rajghat, Near Holowchowka, Mangaldai, Darrang, Assam – 784529
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:8638681231" className="text-white/80 hover:text-white transition-colors">
                  8638681231
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href="mailto:nandankananvn@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  nandankananvn@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Nandan Kanan Vidya Niketan. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Senior Secondary School | Est. 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
