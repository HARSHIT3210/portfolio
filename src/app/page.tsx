"use client";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { SkillsMarquee } from "@/components/skills";
import ProjectSection from "./projects/section";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <section id="about" className="h-screen">
        <Home />
      </section>
      <section id="projects" className="h-screen">
        <ProjectSection />
      </section>
      <section id="skills" className="h-screen">
        <SkillsMarquee />
      </section>
    </div>
  );
}
