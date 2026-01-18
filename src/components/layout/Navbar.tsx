import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Teachers", path: "/teachers" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="Nandan Kanan Vidya Niketan"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-soft transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 5 }}
            />
            <div className="hidden sm:block">
              <h1
                className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Nandan Kanan
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                Vidya Niketan
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? isScrolled
                      ? "text-primary bg-primary/10"
                      : "text-accent bg-white/10"
                    : isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full ${
                      isScrolled ? "bg-primary" : "bg-accent"
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:8638681231" className="flex items-center gap-2">
              <Button variant={isScrolled ? "outline" : "heroOutline"} size="sm">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">8638681231</span>
              </Button>
            </a>
            <Link to="/admissions">
              <Button variant={isScrolled ? "default" : "hero"} size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-lg shadow-elevated lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 space-y-3"
              >
                <a href="tel:8638681231" className="block">
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 8638681231
                  </Button>
                </a>
                <Link to="/admissions" className="block">
                  <Button variant="default" className="w-full" size="lg">
                    Apply for Admission
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
