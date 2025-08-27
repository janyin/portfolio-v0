"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const t = useTranslations("skill");
  const skillCategories = [
    {
      title: t("Frontend"),
      icon: (active: boolean) => (
        <Code
          className={` ${active ? "text-gray-300" : "text-blue-400"}`}
          size={24}
        />
      ),
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "SAP UI5", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: t("Backend"),
      icon: (active: boolean) => (
        <Server
          className={` ${active ? "text-gray-300" : "text-green-400"}`}
          size={24}
        />
      ),
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "Java", level: 70 },
      ],
    },
    {
      title: t("Database"),
      icon: (active: boolean) => (
        <Database
          className={` ${active ? "text-gray-300" : "text-purple-400"}`}
          size={24}
        />
      ),
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "SAP HANA", level: 90 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: t("DevOps"),
      icon: (active: boolean) => (
        <Wrench
          className={` ${active ? "text-gray-300" : "text-orange-400"}`}
          size={24}
        />
      ),
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Github Actions", level: 75 },
        { name: "Cloudflare", level: 80 },
        { name: "Azure", level: 80 },
        { name: "SAP HANA Cloud", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-900/50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            {t("description")}
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          {/* Category Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 rounded-full px-6 py-3 transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r " +
                      category.color +
                      " font-semibold text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.icon(activeCategory === index)}
                <span
                  className={` ${activeCategory === index ? "text-black-700" : "text-white"}`}
                >
                  {category.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-gray-700 bg-gray-800/50 transition-all duration-300 hover:bg-gray-800/70">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700">
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
            className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4"
          >
            <div className="flex flex-col items-center">
              <Cloud className="mb-2 text-blue-400" size={32} />
              <h4 className="font-semibold text-white">
                {t("Cloud Platforms")}
              </h4>
              <p className="text-sm text-gray-400">
                Cloudflare, Azure, SAP HANA Cloud
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="mb-2 text-green-400" size={32} />
              <h4 className="font-semibold text-white">{t("Mobile")}</h4>
              <p className="text-sm text-gray-400">React Native, PWA</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="mb-2 text-purple-400" size={32} />
              <h4 className="font-semibold text-white">{t("Enterprise")}</h4>
              <p className="text-sm text-gray-400">SAP, ServiceNow</p>
            </div>
            <div className="flex flex-col items-center">
              <GitBranch className="mb-2 text-orange-400" size={32} />
              <h4 className="font-semibold text-white">{t("Methodologies")}</h4>
              <p className="text-sm text-gray-400">Agile, DevOps</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
