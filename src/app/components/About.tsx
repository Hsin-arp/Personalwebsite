import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-12 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1672676434074-20ff3b80a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRldmVsb3BlciUyMGxhcHRvcHxlbnwxfHx8fDE3NjU4OTMzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="About me"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-700"
            >
              Hello! I’m Prabin Shrestha, a frontend-focused developer with a strong interest in UI/UX design and software quality assurance. I enjoy building clean, responsive, and user-friendly web interfaces while ensuring they work correctly across real-world scenarios.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700"
            >
              I’m currently pursuing a Bachelor’s degree in Information Management, where I’ve developed a solid foundation in web technologies, design principles, and software testing. Alongside frontend development, I actively practice manual testing, writing test cases, performing exploratory testing, and creating clear bug reports to improve product quality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-700"
            >
              I believe good software is not only about how it looks, but also how reliably it works. By combining development, design, and QA skills, I aim to create digital experiences that are both visually appealing and dependable.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700"
            >
              I’m continuously learning, experimenting with new tools, and improving my skills to grow as a well-rounded professional in the tech industry.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <h3 className="text-xl mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-gray-700">
                {["📍 Location: Lalitpur, Nepal", "🎓 Education: Bachelor’s in Information Management (BIM)", "💡 Core Skills: Frontend Development, UI/UX Design, Manual QA Testing", "🎯 Focus: Usability, software quality, and real-world user experience"].map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}