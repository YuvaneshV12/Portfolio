
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
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Web-based platform that allows users to search, book, and manage car rentals from various providers."
    },
    {
      title: "Job IT",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Web application that enables users to search for job openings, view estimated salaries, and locate available jobs based on their location."
    },
    {
      title: "Trip Guide",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations."
    },
    {
      title: "E-Commerce Platform",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Online shopping platform with customer and admin dashboards, payment integration, and order tracking."
    },
    {
      title: "Fitness App",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Mobile application for workout tracking, nutrition planning, and progress visualization."
    },
    {
      title: "Movie Database",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Web application that provides information about movies, TV shows, and actors using external APIs."
    },
    {
      title: "Weather Dashboard",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
      description: "Real-time weather forecast app with location detection and 7-day predictions."
    },
    {
      title: "Chat Application",
      image: "public/lovable-uploads/b8225408-20cc-4164-83c9-f8e24514e22b.png",
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
