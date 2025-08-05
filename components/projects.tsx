"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, ExternalLink, Github, Zap } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "SAP for Me - Customer Support Portal ",
    description:
      "SAP for Me is the personalized central entry point to access SAP products, support, and services.",
    image: "/sapforme.png",
    technologies: [
      "TypeScript",
      "SAP Fiori",
      "Node.js",
      "GraphQL",
      "SAP Cloud Platform",
      "OpenUI5",
    ],
    liveUrl: "https://support.sap.com/en/index.html",
    githubUrl: "",
    featured: true,
    icon: <Zap className="text-yellow-400" size={24} />,
  },
  {
    title: "Honeywell Safety Suite - Industrial Automation",
    description:
      "Honeywell Safety Suite enhances safety and compliance with connected devices and intelligent automation.",
    image: "/honeywell-safety-suite.png",
    technologies: ["React", "TypeScript", "Node.js"],
    liveUrl:
      "https://automation.honeywell.com/us/en/software/detection-measurement-and-control/safety-suite",
    githubUrl: "",
    featured: true,
    icon: <Database className="text-blue-400" size={24} />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of technical projects, open-source contributions, and innovative solutions
          </p> */}
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="group overflow-hidden border-gray-700 bg-gray-800/50 transition-all duration-300 hover:bg-gray-800/70">
                <div className={`${project.featured ? "md:flex" : ""}`}>
                  <div
                    className={`${project.featured ? "md:w-1/2" : ""} relative overflow-hidden`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute left-4 top-4">{project.icon}</div>
                  </div>

                  <CardContent
                    className={`p-8 ${project.featured ? "md:w-1/2" : ""}`}
                  >
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-3 py-1 text-sm text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-white"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-700"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
