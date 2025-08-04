"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Database, Wrench, Cloud, Smartphone, Globe, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="text-blue-400" size={24} />,
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "SAP UI5", level: 88 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-green-400" size={24} />,
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="text-purple-400" size={24} />,
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "SAP HANA", level: 70 },
      { name: "MySQL", level: 80 },
      { name: "Elasticsearch", level: 65 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="text-orange-400" size={24} />,
    color: "from-orange-400 to-red-400",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Git", level: 95 },
      { name: "Webpack", level: 80 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r " + category.color + " text-black font-semibold"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <Cloud className="text-blue-400 mb-2" size={32} />
              <h4 className="text-white font-semibold">Cloud Platforms</h4>
              <p className="text-gray-400 text-sm">AWS, Azure, GCP</p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="text-green-400 mb-2" size={32} />
              <h4 className="text-white font-semibold">Mobile</h4>
              <p className="text-gray-400 text-sm">React Native, PWA</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="text-purple-400 mb-2" size={32} />
              <h4 className="text-white font-semibold">Enterprise</h4>
              <p className="text-gray-400 text-sm">SAP, Salesforce</p>
            </div>
            <div className="flex flex-col items-center">
              <GitBranch className="text-orange-400 mb-2" size={32} />
              <h4 className="text-white font-semibold">Methodologies</h4>
              <p className="text-gray-400 text-sm">Agile, DevOps</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
