
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  image: string;
  description: string;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Car Rent",
      image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Web-based platform that allows users to search, book, and manage car rentals from various providers."
    },
    {
      title: "Job IT",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Web application that enables users to search for job openings, view estimated salaries, and locate available jobs based on their location."
    },
    {
      title: "Trip Guide",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations."
    },
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Online shopping platform with customer and admin dashboards, payment integration, and order tracking."
    },
    {
      title: "Fitness App",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Mobile application for workout tracking, nutrition planning, and progress visualization."
    },
    {
      title: "Movie Database",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Web application that provides information about movies, TV shows, and actors using external APIs."
    },
    {
      title: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Real-time weather forecast app with location detection and 7-day predictions."
    },
    {
      title: "Chat Application",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Real-time messaging platform with user authentication, notifications, and file sharing."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#0D1320]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-portfolio-purple">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Following projects showcases my skills and experience through real-world examples of 
            my work. Each project is briefly described with links to code repositories and live demos in 
            it. It reflects my ability to solve complex problems, work with different technologies, and 
            manage projects effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-[#1A1E2E] p-4 rounded-lg h-full">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                  <div className="mt-4 flex justify-between">
                    <a href="#" className="text-portfolio-purple hover:underline">Code</a>
                    <a href="#" className="text-portfolio-cyan hover:underline">Live Demo</a>
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
