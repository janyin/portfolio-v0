"use client";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <motion.div style={{ opacity }} className="relative z-10">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </motion.div>
  );
}
