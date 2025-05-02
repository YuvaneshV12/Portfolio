
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="text-center md:text-left md:max-w-xl md:flex-1"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
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
              className="text-xl md:text-2xl text-gray-300 mb-8"
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
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={800} 
                offset={-50}
                className="bg-portfolio-purple text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all inline-block w-full md:w-auto"
              >
                Contact Me
              </Link>
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                duration={800}
                offset={-50}
                className="bg-transparent border border-portfolio-purple text-portfolio-purple px-8 py-3 rounded-full font-medium hover:bg-portfolio-purple/10 transition-all inline-block w-full md:w-auto"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block md:flex-1 h-[400px] mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Spline scene="https://prod.spline.design/sCJ5DuyVRr7iqUBY/scene.splinecode" />
          </motion.div>
        </div>
          
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={800}
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="text-portfolio-purple" size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
