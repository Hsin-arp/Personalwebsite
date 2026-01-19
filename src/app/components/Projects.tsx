import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and user authentication.",
      image: "https://images.unsplash.com/photo-1622128082634-1f9742839291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3JrfGVufDF8fHx8MTc2NTg5MzMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1672676434074-20ff3b80a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRldmVsb3BlciUyMGxhcHRvcHxlbnwxfHx8fDE3NjU4OTMzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
      image: "https://images.unsplash.com/photo-1728631191055-aa24c9eff7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTg1MTg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Firebase", "Material-UI"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Title letter animation
  const titleText = "Featured Projects";
  const titleLetters = titleText.split("");

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl mb-12 text-center flex justify-center flex-wrap"
        >
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut"
                }
              }}
              whileHover={{
                y: -10,
                scale: 1.2,
                color: "#2563eb", // Using hex instead of oklch
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="inline-block cursor-default"
              style={{ display: "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ perspective: 1000 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full relative">
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "2px",
                    zIndex: 0
                  }}
                >
                  <div
                    className="absolute inset-0 animate-gradient"
                    style={{
                      background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                      backgroundSize: "300% 300%"
                    }}
                  />
                  <div className="absolute inset-[2px] bg-white rounded-lg" />
                </motion.div>

                <div className="relative z-10">
                  <div className="h-48 overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.img
                      animate={{ 
                        scale: hoveredIndex === index ? 1.15 : 1,
                        rotate: hoveredIndex === index ? 2 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.div>
                    </CardTitle>
                    <CardDescription>
                      <motion.span
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0.7
                        }}
                        transition={{ duration: 0.3 }}
                        className="block"
                      >
                        {project.description}
                      </motion.span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ 
                            opacity: 1, 
                            scale: 1, 
                            rotate: 0,
                            transition: {
                              delay: tagIndex * 0.1,
                              type: "spring",
                              stiffness: 200,
                              damping: 15
                            }
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: [0, -5, 5, 0],
                            backgroundColor: "#2563eb",
                            color: "#ffffff",
                            transition: { duration: 0.3 }
                          }}
                          className="px-3 py-1 rounded-full text-sm cursor-pointer"
                          style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <motion.div 
                        whileHover={{ scale: 1.08, x: -3 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Github className="mr-2" size={16} />
                          </motion.div>
                          Code
                        </Button>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.08, x: 3 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full">
                          <motion.div
                            whileHover={{ rotate: -360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink className="mr-2" size={16} />
                          </motion.div>
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}