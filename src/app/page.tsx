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
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="about" className="h-screen">
        <About/>
      </section>
      <section id="projects" className="h-screen">
        <ProjectSection />
      </section>
      <section id="skills" className="h-screen">
        <SkillsMarquee />
      </section>
      <footer className="h-24">
        <div className="flex items-center justify-center h-full">
          <Footer/>
        </div>
      </footer>
      
    </div>
  );
}
