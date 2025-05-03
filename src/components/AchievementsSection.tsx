
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  image: string;
  description: string;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Carbon FootPrint Tracker for Sustainable Living",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22o.png",
      description: "Developed a web-based Carbon Footprint Tracker that calculates and visualizes users' daily emissions to promote eco-friendly habits."
    },
    { 
      title: "USSD Based Grocery Ordering Application",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22p.jpg",
      description: "Developed a USSD-based grocery ordering application, enabling users to browse, order, and pay for groceries through simple text commands on feature phones."
    },
    {
      title: "Social Volunteering Platform for Community Engagement",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22l.avif",
      description: "Created a social volunteering platform that connects volunteers with local community projects, allowing users to discover opportunities, sign up, and track their volunteer hours."
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 lg:py-32 bg-[#0D1320]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-portfolio-purple">Projects</span>
          </h2>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto mb-8 md:mb-10"></div>
          <p className="text-gray-300 max-w-3xl lg:max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl">
            Following projects showcases my skills and experience through real-world examples of 
            my work. Each project is briefly described with links to code repositories and live demos in 
            it. It reflects my ability to solve complex problems, work with different technologies, and 
            manage projects effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-1">
                <div className="bg-[#1A1E2E] p-4 md:p-6 rounded-lg h-full">
                  <div className="overflow-hidden rounded-lg mb-4 md:mb-6">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3">{achievement.title}</h3>
                  <p className="text-lg md:text-xl text-gray-400">{achievement.description}</p>
                  <div className="mt-4 md:mt-6 flex justify-between">
                    <a href="https://github.com/YuvaneshV12" className="text-lg md:text-xl text-portfolio-purple hover:underline">Code</a>
                    <a href="https://github.com/YuvaneshV12" className="text-lg md:text-xl text-portfolio-cyan hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
