import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeachersPreview } from "@/components/home/TeachersPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationPreview } from "@/components/home/LocationPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <CoursesPreview />
        <WhyChooseUs />
        <TeachersPreview />
        <GalleryPreview />
        <LocationPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
