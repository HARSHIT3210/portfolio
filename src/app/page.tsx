"use client";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { SkillsMarquee } from "@/components/skills";
import ProjectSection from "./projects/section";
import About from "@/components/AboutMe";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="overflow-hidden bg-background">
      <Navbar />
      <section id="home" className="min-h-screen px-4 sm:px-8">
        <Home />
      </section>
      <section id="about" className="min-h-screen px-4 sm:px-8">
        <About />
      </section>
      <section id="projects" className="min-h-screen px-4 sm:px-8">
        <ProjectSection />
      </section>
      <section id="skills" className="min-h-screen px-4 sm:px-8">
        <SkillsMarquee />
      </section>
      <footer className="h-24 px-4 sm:px-8">
        <div className="flex items-center justify-center h-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
