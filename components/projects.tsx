"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Zap, Database, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ChatGPT Tools+",
    description:
      "Enhanced ChatGPT interface with advanced features including conversation management, export capabilities, and custom prompts. Built for power users who need more control over their AI interactions.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Electron"],
    liveUrl: "https://chatgpt-tools-plus.com",
    githubUrl: "https://github.com/username/chatgpt-tools-plus",
    featured: true,
    icon: <Zap className="text-yellow-400" size={24} />,
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Real-time analytics dashboard for enterprise clients with customizable widgets, data visualization, and role-based access control. Handles millions of data points with optimal performance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Redis"],
    liveUrl: "https://enterprise-dashboard.com",
    githubUrl: "https://github.com/username/enterprise-dashboard",
    featured: true,
    icon: <Database className="text-blue-400" size={24} />,
  },
  {
    title: "SAP UI5 Component Library",
    description:
      "Reusable component library for SAP UI5 applications with modern design patterns, accessibility features, and comprehensive documentation. Used across multiple enterprise projects.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["SAP UI5", "JavaScript", "CSS3", "Fiori Design", "OpenUI5"],
    liveUrl: "https://sap-ui5-components.com",
    githubUrl: "https://github.com/username/sap-ui5-components",
    featured: false,
    icon: <Globe className="text-green-400" size={24} />,
  },
  {
    title: "API Gateway Service",
    description:
      "Microservices API gateway with rate limiting, authentication, and monitoring capabilities. Built to handle high-traffic enterprise applications with 99.9% uptime.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    liveUrl: "https://api-gateway-service.com",
    githubUrl: "https://github.com/username/api-gateway",
    featured: false,
    icon: <Database className="text-purple-400" size={24} />,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of technical projects, open-source contributions, and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group overflow-hidden">
                <div className={`${project.featured ? "md:flex" : ""}`}>
                  <div className={`${project.featured ? "md:w-1/2" : ""} relative overflow-hidden`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute top-4 left-4">{project.icon}</div>
                  </div>

                  <CardContent className={`p-8 ${project.featured ? "md:w-1/2" : ""}`}>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
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
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
