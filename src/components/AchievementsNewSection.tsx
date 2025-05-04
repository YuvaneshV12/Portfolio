
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  image: string;
  description: string;
}

const AchievementsNewSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Solved LeetCode Problems",
      image: "https://i.ibb.co/xqyyxHy7/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Solved LeetCode problems to strengthen data structures and algorithms skills through hands-on coding challenges."
    },
    {
      title: "Secured Thrid Price in Code-A-Thon",
      image: "https://i.ibb.co/zWqQZWh7/b8225408-20cc-4164-83c9-f8e24514e22v.jpg",
      description: "Secured third place in Code-A-Thon by building an innovative and efficient solution under time constraints."
    },
    {
      title: "Earned a Java Completion Certificate",
      image: "https://i.ibb.co/tpZfQy7t/b8225408-20cc-4164-83c9-f8e24514e22i.png",
      description: "Earned a Java completion certificate by mastering core concepts and building hands-on projects."
    }
  ];

  return (
    <section id="achievements-section" className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-portfolio-purple">Achievements</span>
          </h2>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto mb-8 md:mb-10"></div>
          <p className="text-gray-300 max-w-3xl lg:max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl">
            Recognition and accomplishments from my professional journey, highlighting my expertise
            and contributions to the field of web development and design.
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsNewSection;
