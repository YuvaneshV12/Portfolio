
import { motion } from "framer-motion";
import { Code, Layers, Database, Search } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Web Developer", icon: <Code className="w-12 h-12 mb-4 text-portfolio-purple" /> },
    { name: "React Native Developer", icon: <Layers className="w-12 h-12 mb-4 text-portfolio-purple" /> },
    { name: "Backend Developer", icon: <Database className="w-12 h-12 mb-4 text-portfolio-purple" /> },
    { name: "Problem Solver", icon: <Search className="w-12 h-12 mb-4 text-portfolio-purple" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-portfolio-purple">Me</span>
          </h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-purple">Who Am I?</h3>
            <p className="text-gray-300 text-lg mb-6">
              I'm a passionate developer with expertise in modern web technologies like React and Node.js. 
              I create functional, user-friendly websites and applications. I'm a fast learner who loves
              turning ideas into real, working solutions. Let's collaborate and bring your vision to life!
            </p>
            <p className="text-gray-300 text-lg">
              With a strong foundation in front-end and back-end technologies, I deliver clean, efficient, 
              and scalable code. I constantly stay updated with the latest tech trends to provide cutting-edge
              solutions for my clients.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-[#1A1E2E] p-8 rounded-xl flex flex-col items-center text-center hover:border-portfolio-purple border border-transparent transition-all"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
                <h4 className="text-xl font-medium">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
