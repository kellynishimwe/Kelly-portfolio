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
              src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/486067125_122175099320272028_5469868548852246742_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFC4r7dyy-84qh5U9vRYIzRGGC__e-ep2sYYL_9756naznpJ0Jp9LG0G156TnyJsWeoXGlIFxOFqylY-qukOEen&_nc_ohc=eBQ_5nS0gFIQ7kNvwH0YgeF&_nc_oc=AdnN3vDuhbUgWt3knAHA4kZOkrA749bh9wxoMtsKUyS0oGRnI4EONoJ65ZLFdbpepueG1uO8Xr3ncRTWcD3eXIx3&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=kiVsCQ11DGWFlZXZ6M06bg&oh=00_AfEMhtrHkkVaRBLaAcyWuNz943rUJKfC0ycqVYWtMwy4Rg&oe=68042A6C"
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
