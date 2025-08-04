"use client"

import { motion } from "framer-motion"
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Enterprise Tech Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led front-end architecture for enterprise applications serving 100K+ users. Implemented micro-frontend architecture using React and TypeScript, resulting in 40% faster development cycles.",
    achievements: [
      "Architected scalable front-end solutions for enterprise clients",
      "Mentored team of 5 junior developers",
      "Reduced application load time by 60% through optimization",
      "Implemented CI/CD pipelines improving deployment efficiency by 80%",
    ],
    technologies: ["TypeScript", "React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Full-Stack Developer",
    company: "SAP Consulting Group",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Specialized in SAP UI5 development and integration with enterprise systems. Built custom Fiori applications and enhanced existing SAP modules for Fortune 500 clients.",
    achievements: [
      "Developed 15+ custom SAP UI5 applications",
      "Integrated SAP systems with modern web technologies",
      "Improved user experience for 50K+ SAP users",
      "Led technical workshops for client teams",
    ],
    technologies: ["SAP UI5", "JavaScript", "OData", "SAPUI5", "Fiori"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovation Labs",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Focused on creating responsive web applications and improving user experience. Collaborated with UX designers to implement pixel-perfect designs and smooth animations.",
    achievements: [
      "Built responsive applications for various industries",
      "Implemented modern JavaScript frameworks",
      "Collaborated with cross-functional teams",
      "Optimized applications for mobile devices",
    ],
    technologies: ["React", "Vue.js", "CSS3", "JavaScript", "Webpack"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building enterprise solutions and leading technical teams across various industries
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Building size={18} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <ChevronRight size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
