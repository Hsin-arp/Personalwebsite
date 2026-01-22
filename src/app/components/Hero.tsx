import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split the role text into parts for animation
  const roles = ["Frontend Developer", "UI/UX Designer", "QA Engineer"];
  const roleText = "Frontend Developer | UI/UX Designer | QA Engineer";
  
  // Split name for letter animation
  const name = "Prabin Shrestha";
  const nameLetters = name.split("");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeOut"
          }
        }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1728631191055-aa24c9eff7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTg1MTg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>

      {/* Animated Overlay Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: "rgba(96, 165, 250, 0.3)" }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 0.6, 0],
              scale: [null, Math.random() * 1.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="text-center text-white px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl mb-6"
        >
          Hi, I'm{" "}
          <span className="inline-flex" style={{ color: "#60a5fa" }}>
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.4 + index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                  color: "#38bdf8",
                  textShadow: "0 0 20px rgb(56, 189, 248)",
                  transition: { duration: 0.3 }
                }}
                className="inline-block cursor-pointer"
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {roles.map((role, roleIndex) => {
              const letters = role.split("");
              return (
                <motion.div 
                  key={roleIndex}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1 + roleIndex * 0.2,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    className="flex"
                    whileHover={{ scale: 1.05 }}
                  >
                    {letters.map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: 1 + roleIndex * 0.2 + letterIndex * 0.03,
                            ease: "easeOut"
                          }
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.2,
                          color: "#60a5fa",
                          textShadow: "0 0 15px rgb(96, 165, 250)",
                          transition: { 
                            duration: 0.2,
                            type: "spring",
                            stiffness: 300
                          }
                        }}
                        className="inline-block cursor-default"
                        style={{ display: "inline-block" }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.div>
                  {roleIndex < roles.length - 1 && (
                    <motion.span 
                      className="mx-2"
                      style={{ color: "#60a5fa" }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: [0, 360],
                        transition: {
                          opacity: { delay: 1.2 + roleIndex * 0.2, duration: 0.3 },
                          scale: { delay: 1.2 + roleIndex * 0.2, duration: 0.3 },
                          rotate: { delay: 1.2 + roleIndex * 0.2, duration: 0.6 }
                        }
                      }}
                      whileHover={{
                        scale: 1.5,
                        rotate: 180,
                        transition: { duration: 0.3 }
                      }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-blue-500 hover:bg-blue-600"
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}