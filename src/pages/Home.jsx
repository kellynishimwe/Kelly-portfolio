import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript"];
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Innovators Inc.",
      duration: "2021 - Present",
      description: [
        "Designed and implemented dynamic, user-focused web applications.",
        "Collaborated with cross-functional teams to deliver seamless features.",
        "Ensured code quality through testing and debugging.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Creative Labs",
      duration: "2020 - 2021",
      description: [
        "Contributed to building responsive user interfaces.",
        "Enhanced user experience through modern frontend frameworks.",
        "Assisted in maintaining and debugging legacy code.",
      ],
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years of Experience", value: "3+" },
    { label: "Clients Worked With", value: "20+" },
    { label: "Certifications", value: "5+" },
  ];

  return (
    <motion.section
      className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 sm:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center mb-16 bg-gray-900 bg-opacity-80 p-6 sm:p-12 rounded-lg shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left Side - Profile Image */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/475063583_122166402278272028_6392923656566073379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9Wqt4qbIhVTugBXI7prh-zTyvWa8z4CXNPK9ZrzPgJUHbYXCV7Jw2S13TgF6x-4cJjoSNhvqHK_eN0fIPQfc5&_nc_ohc=Z1ugfYZsppoQ7kNvgHZQAcy&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ARfbI8r25iCAA24PtpU_2NO&oh=00_AYDKghOlWfAxZk0Ci4KPBD3HlHOmW0lq8uok4Ro8UwBcfw&oe=67A8FA3F"
            alt="Kelly Nishimwe"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg opacity-90"
          />
        </div>

        {/* Right Side - Introduction */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">
            Hi, I&apos;m <span className="text-blue-500">Kelly Nishimwe</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            I’m a passionate Full Stack Developer with expertise in building
            dynamic, responsive, and user-friendly web applications. I
            specialize in both frontend and backend development, delivering
            seamless user experiences and robust server-side functionality.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Top Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          My Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-blue-500 text-white py-6 px-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Experience
        </h2>
        <ul>
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4 shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {exp.company} | {exp.duration}
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link
          to="/contact"
          className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Work With Me
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Home;
