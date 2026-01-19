import { motion } from "motion/react";
import { Heart, Music, Camera, Plane, Trophy } from "lucide-react";

export function Passion() {
  const passions = [
    {
      icon: <Heart size={48} />,
      title: "Problem Solving",
      description: "I love tackling complex challenges and finding elegant solutions through code.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Trophy size={48} />,
      title: "Sports",
      description: "Active in Football, Basketball, and Table Tennis—enjoying the teamwork and competition.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <Music size={48} />,
      title: "Music & Creativity",
      description: "Music fuels my creativity and keeps me motivated while coding.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Camera size={48} />,
      title: "Photography",
      description: "Capturing moments and finding beauty in details, both in life and design.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Plane size={48} />,
      title: "Travel & Culture",
      description: "Exploring new places and experiencing different cultures and perspectives.",
      color: "from-sky-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="passion" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">My Passions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond coding, here are the things that inspire and drive me every day
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {passions.map((passion, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${passion.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Icon with animation */}
                <motion.div
                  className={`inline-block p-4 rounded-xl bg-gradient-to-br ${passion.color} text-white mb-4`}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  {passion.icon}
                </motion.div>

                <h3 className="text-xl mb-3">{passion.title}</h3>
                <p className="text-gray-600">{passion.description}</p>

                {/* Animated accent line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${passion.color} mt-4 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating elements animation */}
        <div className="relative mt-16 h-32 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              animate={{
                y: [-20, -100],
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                backgroundColor: "#60a5fa",
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}