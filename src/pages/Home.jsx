import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript"];
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years of Experience", value: "3+" },
    { label: "Clients Worked With", value: "20+" },
    { label: "Certifications", value: "5+" },
  ];

  return (
    <motion.section
      className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 sm:px-12 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16 bg-gray-900 bg-opacity-80 p-6 sm:p-12 rounded-lg shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/475063583_122166402278272028_6392923656566073379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9Wqt4qbIhVTugBXI7prh-zTyvWa8z4CXNPK9ZrzPgJUHbYXCV7Jw2S13TgF6x-4cJjoSNhvqHK_eN0fIPQfc5&_nc_ohc=-Ej-G7zxAk4Q7kNvgG-Ogbl&_nc_oc=AdgsvJShP1YdOIEFf0RpEf-RUbO5gqiXL7Wdbnq5y_5fheao7owMBLyURwPjeIe_6vlHY4ogk6a1z7H2tC_VfRZ4&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=Avmopv8vuDZVbsorPfdm4co&oh=00_AYAFPWP7EB7WXFeoEyx0ZC2_M5FSugG1OZfNkkWbEoD9-w&oe=67AF91BF"
              alt="Kelly Nishimwe"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg opacity-90"
            />
          </div>

          {/* Introduction */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white">
              Hi, I&apos;m <span className="text-blue-500">Kelly Nishimwe</span>
            </h1>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Full Stack Developer with expertise in building dynamic web applications.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12"
          initial={{ scale: 0.95, opacity: 0 }}
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
                className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md transition-all duration-500"
                whileHover={{ scale: 1.05 }}
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
                className="bg-blue-500 text-white py-6 px-4 rounded-lg shadow-lg transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-500"
          >
            Work With Me
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
