
import { useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import AchievementsNewSection from "../components/AchievementsNewSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  // Change title on mount
  useEffect(() => {
    document.title = "Yuvanesh - 3D Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <AchievementsNewSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
