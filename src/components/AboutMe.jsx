import { motion } from "framer-motion";
import icon from "../assets/icon.svg"
const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img src={icon} alt="icon" className="w-[70px] h-[70px]"/>
      <div className="container mx-auto text-center md:text-left px-6 sm:px-12">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Hi there! I’m{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Kelly Nishimwe
          </span>
          , a passionate{" "}
          <span className="text-blue-600 dark:text-blue-400">Frontend Developer</span> dedicated to
          creating sleek and efficient user interfaces. I thrive in
          collaborative environments and love turning ideas into reality.
        </motion.p>

        <motion.p
          className="mt-6 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          My expertise includes technologies like{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and{" "}
          <span className="font-semibold">Node.js</span>. I’ve built a range of
          projects, including responsive websites and dynamic applications.
        </motion.p>

        <motion.p
          className="mt-6 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          Beyond coding, I enjoy{" "}
          <span className="font-semibold">exploring nature</span>, dabbling in{" "}
          <span className="font-semibold">photography</span>, and staying
          updated with the latest advancements in the tech world.
        </motion.p>

        <motion.p
          className="mt-8 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          I’m always excited to work on challenging projects and connect with
          like-minded people.{" "}
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
          >
            Let’s connect!
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
