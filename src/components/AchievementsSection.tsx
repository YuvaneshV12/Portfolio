
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Achievement {
  title: string;
  description: string;
  techStack?: string[];
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Car Rent",
      description: "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
      techStack: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Job IT",
      description: "Web application that enables users to search for job openings, view estimated salaries, and locate available jobs based on their location.",
      techStack: ["React", "Express", "PostgreSQL"]
    },
    {
      title: "Trip Guide",
      description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations.",
      techStack: ["NextJS", "Tailwind", "Supabase"]
    },
    {
      title: "E-Commerce Platform",
      description: "Online shopping platform with customer and admin dashboards, payment integration, and order tracking.",
      techStack: ["React", "Redux", "Firebase"]
    },
    {
      title: "Fitness App",
      description: "Mobile application for workout tracking, nutrition planning, and progress visualization.",
      techStack: ["React Native", "GraphQL", "MongoDB"]
    },
    {
      title: "Movie Database",
      description: "Web application that provides information about movies, TV shows, and actors using external APIs.",
      techStack: ["Vue.js", "Express", "REST API"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecast app with location detection and 7-day predictions.",
      techStack: ["React", "Weather API", "Geolocation"]
    },
    {
      title: "Chat Application",
      description: "Real-time messaging platform with user authentication, notifications, and file sharing.",
      techStack: ["React", "Socket.io", "Firebase"]
    }
  ];

  const mobileAchievements = [...achievements];

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

        {/* Desktop view - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-[#1A1E2E] p-6 rounded-lg h-full flex flex-col hover:shadow-lg hover:shadow-portfolio-purple/20"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.4)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4">
                  <motion.h3 
                    className="text-xl font-semibold mb-2 text-portfolio-purple"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {achievement.title}
                  </motion.h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
                
                {achievement.techStack && (
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-[#15192A] text-xs px-2 py-1 rounded text-portfolio-purple"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-auto pt-4 border-t border-gray-800">
                  <motion.a 
                    href="#" 
                    className="flex items-center text-portfolio-purple hover:underline" 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Github size={16} className="mr-1" /> Code
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="flex items-center text-portfolio-cyan hover:underline"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {mobileAchievements.map((achievement, index) => (
                <CarouselItem key={index}>
                  <motion.div 
                    className="p-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-[#1A1E2E] p-6 rounded-lg h-full flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 text-portfolio-purple">{achievement.title}</h3>
                        <p className="text-gray-400">{achievement.description}</p>
                      </div>
                      
                      {achievement.techStack && (
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {achievement.techStack.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="bg-[#15192A] text-xs px-2 py-1 rounded text-portfolio-purple"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between mt-auto pt-4 border-t border-gray-800">
                        <a href="#" className="flex items-center text-portfolio-purple hover:underline">
                          <Github size={16} className="mr-1" /> Code
                        </a>
                        <a href="#" className="flex items-center text-portfolio-cyan hover:underline">
                          <ExternalLink size={16} className="mr-1" /> Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-4">
              <CarouselPrevious className="static transform-none bg-transparent border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white" />
              <CarouselNext className="static transform-none bg-transparent border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
