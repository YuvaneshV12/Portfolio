
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "Web Developer", icon: "public/lovable-uploads/886b5595-2812-4d9c-afe2-281e94580ad5.png" },
    { name: "React Native Developer", icon: "public/lovable-uploads/a444911e-9ebc-48dc-8cd6-d8b5a981eb19.png" },
    { name: "Backend Developer", icon: "public/lovable-uploads/054ce4e3-e6b9-4e4c-aa4a-3f4d03a63acf.png" },
    { name: "Problem Solver", icon: "public/lovable-uploads/65a20eee-c072-4cac-96df-58aaf08b20d1.png" },
  ];

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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-[#1A1E2E] p-8 rounded-xl flex flex-col items-center text-center hover:border-portfolio-purple border border-transparent transition-all"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-20 h-20 mb-4 animate-float" 
                />
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
