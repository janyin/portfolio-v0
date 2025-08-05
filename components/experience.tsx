"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "SAP - Web Developer",
    companyLogo: "/sap-logo.svg",
    location: "Shanghai, China",
    period: "Nov 2022 - Mar 2025",
    description:
      "Developed and maintained GetSupport App for SAP for Me , a global customer support portal serving millions of users worldwide",
    achievements: [
      "Improved application performance by 30% through code optimization",
      "Integrated with ServiceNow ITSM, optimizing internal support workflows",
      "Improved unit test coverage to 90%+ using Sinon.js and QUnit",
    ],
    technologies: [
      "SAP UI5",
      "JavaScript",
      "ServiceNow",
      "Fiori",
      "OData",
      "Java",
    ],
  },
  /**
   * Honeywell Safety Suite is an ecosystem of comprehensive safety applications that enhances safety, productivity, and compliance for plant, remote and emergency response customers by using connected devices, analytics, and workflow automation. It lets you securely manage your gas detection fleet  and monitor worker safety in one place almost anytime and anywhere.
   */
  {
    title: "Honeywell - Software Engineer",
    location: "Shanghai, China",
    period: "Jun 2021 - Aug 2022",
    companyLogo: "/honeywell-logo.svg",
    description:
      "Led web development for an industrial IoT security platform, working with hardware teams to integrate real-time data visualization and analytics.",
    achievements: [
      "Developed a real-time data visualization dashboard",
      "Integrated with Google Maps API for facility security monitoring",
      "Implemented automation features, Scheduled Data Downloads, Scheduled Reports, and firmware updates",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Google Maps API"],
  },
  {
    title: "Shanghai Aiyong Technology -Frontend Developer",
    location: "Shanghai, China",
    period: "Apr 2020 - May 2021",
    description:
      "Built and maintained a SaaS backend system for Taobao and Pinduoduo sellers using React and TypeScript, serving 1M+ users.",
    achievements: [
      "Developed a multi-tenant SaaS backend system for e-commerce sellers",
      "Implemented real-time data synchronization with Taro and Ant Design",
      "Improved user experience with responsive design and performance optimizations",
    ],
    technologies: ["Taro", "React", "Vue", "Ant Design"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900/50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="border-gray-700 bg-gray-800/50 transition-all duration-300 hover:bg-gray-800/70">
                <CardContent className="p-8">
                  {exp.companyLogo && (
                    <Image
                      src={exp.companyLogo}
                      alt={`${exp.title} logo`}
                      width={150}
                      height={150}
                      className="mb-4"
                    />
                  )}
                  <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
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

                  <p className="mb-6 leading-relaxed text-gray-300">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 text-lg font-semibold text-white">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <ChevronRight
                            size={16}
                            className="mr-2 mt-1 flex-shrink-0 text-green-400"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-sm text-blue-300"
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
  );
}
