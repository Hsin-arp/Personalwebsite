import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skills = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "React, TypeScript, HTML, CSS, Tailwind",
      gradient: "from-blue-500 to-cyan-400",
      hexColor: "#2563eb",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      shadow: "group-hover:shadow-blue-100",
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Node.js, Python, APIs, Database Design",
      gradient: "from-emerald-500 to-teal-400",
      hexColor: "#059669",
      bg: "bg-emerald-50",
      border: "group-hover:border-emerald-200",
      shadow: "group-hover:shadow-emerald-100",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research, Prototyping",
      gradient: "from-purple-500 to-pink-400",
      hexColor: "#9333ea",
      bg: "bg-purple-50",
      border: "group-hover:border-purple-200",
      shadow: "group-hover:shadow-purple-100",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Responsive Design",
      description: "Mobile-first approach, Cross-browser compatibility",
      gradient: "from-orange-500 to-red-400",
      hexColor: "#ea580c",
      bg: "bg-orange-50",
      border: "group-hover:border-orange-200",
      shadow: "group-hover:shadow-orange-100",
    },
    {
      icon: <Globe size={40} />,
      title: "Web Technologies",
      description: "Modern frameworks, Progressive Web Apps",
      gradient: "from-indigo-500 to-violet-400",
      hexColor: "#6366f1",
      bg: "bg-indigo-50",
      border: "group-hover:border-indigo-200",
      shadow: "group-hover:shadow-indigo-100",
    },
    {
      icon: <Zap size={40} />,
      title: "Performance",
      description: "Optimization, SEO, Accessibility",
      gradient: "from-amber-500 to-yellow-400",
      hexColor: "#d97706",
      bg: "bg-amber-50",
      border: "group-hover:border-amber-200",
      shadow: "group-hover:shadow-amber-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent ${skill.border} ${skill.shadow}`}
            >
              {/* Background accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className={`mb-6 inline-flex p-4 rounded-2xl ${skill.bg} relative overflow-hidden`}
                  style={{ color: skill.hexColor }}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: 1.1,
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {skill.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {skill.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}