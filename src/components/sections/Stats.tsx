import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Stats = () => {
  const stats = [
    { number: 50000, label: "Devices Monitored" },
    { number: 45, label: "Downtime Reduced" },
    { number: 99, label: "Compliance Rate" },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-6xl font-bold mb-4">
                {stat.number}+
              </h3>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;