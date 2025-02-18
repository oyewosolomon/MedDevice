import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden" id="about">
      {/* Floating Circles Animation */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full opacity-20"
        initial={{ y: -100, x: -100 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full opacity-20"
        initial={{ y: 100, x: 100 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About MedDevice Analytics
          </motion.h2>
          <motion.p
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We are a team of innovators dedicated to transforming the way medical devices are monitored and maintained. Our mission is to empower healthcare providers with cutting-edge technology that enhances patient care and optimizes operations.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="/images/about.jpg" // Replace with your image
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;