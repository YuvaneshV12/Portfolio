
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-3/5 text-center md:text-left mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="h-1 w-6 bg-portfolio-purple mr-4"
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <motion.h2 
                className="text-xl text-portfolio-purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Hi, I'm
              </motion.h2>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-white">Yuvanesh</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              I solve programming problems and build modern web pages and applications.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={800} 
                offset={-50}
                className="bg-portfolio-purple text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all inline-block mr-4"
              >
                Contact Me
              </Link>
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                duration={800}
                offset={-50}
                className="bg-transparent border border-portfolio-purple text-portfolio-purple px-8 py-3 rounded-full font-medium hover:bg-portfolio-purple/10 transition-all inline-block mt-4 md:mt-0"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Coding Environment" 
              className="max-w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
