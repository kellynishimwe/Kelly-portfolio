import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPython, SiTailwindcss, SiPostgresql, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "Advanced", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", level: "Advanced", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", level: "Advanced", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: "React", level: "Intermediate", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "Python", level: "Beginner", icon: <SiPython className="text-yellow-500 text-4xl" /> },
  { name: "SQL", level: "Beginner", icon: <SiPostgresql className="text-blue-500 text-4xl" /> },
  { name: "Docker", level: "Beginner", icon: <SiDocker className="text-blue-600 text-4xl" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Below are some of the skills I bring to the table, with their respective levels:
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="mb-4"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {skill.name}
              </h3>
              <button
                className={`px-4 py-2 rounded-full text-white text-sm font-medium ${
                  skill.level === "Advanced"
                    ? "bg-green-500 hover:bg-green-600"
                    : skill.level === "Intermediate"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                {skill.level}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
