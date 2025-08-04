"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Code, Globe, Zap } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-5xl font-bold md:text-7xl"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Full-Stack Web Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl"
          >
            Focused on delivering enterprise-level software solutions for{" "}
            <span className="font-semibold text-blue-400">
              Fortune 500 companies
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <Code className="text-blue-400" size={20} />
              <span>Modern Web Development</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Zap className="text-yellow-400" size={20} />
              <span>Performance Optimization</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Globe className="text-green-400" size={20} />
              <span>Enterprise Solutions</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white hover:from-blue-600 hover:to-purple-700"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 bg-transparent px-8 py-3 text-gray-300 hover:bg-gray-800"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            onClick={scrollToNext}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
