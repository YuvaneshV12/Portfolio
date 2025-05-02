
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ChevronLeft, ChevronRight, Briefcase, Calendar } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const ResumeSection = () => {
  const experienceData = [
    {
      title: "React.js Developer",
      company: "Starbucks",
      period: "March 2020 - April 2021",
      duties: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers."
      ]
    },
    {
      title: "Front-End Developer",
      company: "Google",
      period: "May 2021 - Present",
      duties: [
        "Building modern, responsive user interfaces for company products",
        "Working with design team to implement pixel-perfect UI components",
        "Optimizing applications for maximum speed and scalability",
        "Maintaining code quality and organization"
      ]
    }
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.2
      }
    })
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-portfolio-purple">Work</span> Experience
          </h2>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto"></div>
        </motion.div>

        {/* Desktop experience layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A1E2E] p-8 rounded-xl relative overflow-hidden border border-gray-800"
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.4)"
              }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-1 h-full bg-portfolio-purple"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-portfolio-purple mr-2" size={20} />
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                </div>
                <p className="text-gray-400 mb-3">{job.company}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-portfolio-purple px-3 py-1 rounded-full text-sm">
                    <Calendar className="mr-1" size={14} />
                    {job.period}
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {job.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex} className="text-gray-300">{duty}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile experience carousel */}
        <div className="md:hidden mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {experienceData.map((job, index) => (
                <CarouselItem key={index}>
                  <motion.div 
                    className="bg-[#1A1E2E] p-6 rounded-xl relative overflow-hidden border border-gray-800 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-portfolio-purple" />
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <Briefcase className="text-portfolio-purple mr-2" size={18} />
                        <h3 className="text-xl font-bold">{job.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-3">{job.company}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center bg-portfolio-purple px-2 py-1 rounded-full text-xs">
                          <Calendar className="mr-1" size={12} />
                          {job.period}
                        </div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {job.duties.map((duty, dutyIndex) => (
                          <li key={dutyIndex} className="text-gray-300">{duty}</li>
                        ))}
                      </ul>
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

        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">My Resume</h3>
          <a 
            href="/sample-resume.pdf"
            className="group bg-portfolio-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center"
            download
          >
            Download CV
            <motion.div
              className="ml-2"
              initial={{ y: 0 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FileDown size={20} />
            </motion.div>
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[#1A1E2E] p-6 rounded-xl max-w-3xl mx-auto w-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-center text-portfolio-purple">Resume Preview</h3>
              <p className="text-center text-gray-400">
                View a snapshot of my professional journey
              </p>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-portfolio-purple">Yuvanesh</h2>
                  <p className="text-gray-400">Full Stack Developer</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-2">Experience</h3>
                  {experienceData.map((job, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between">
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-gray-400">{job.period}</p>
                      </div>
                      <p className="text-sm text-portfolio-purple">{job.company}</p>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((skill, index) => (
                      <span key={index} className="bg-[#15192A] text-xs px-2 py-1 rounded text-portfolio-purple">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-2">Education</h3>
                  <div>
                    <p className="font-medium">Bachelor of Science in Computer Science</p>
                    <div className="flex justify-between">
                      <p className="text-sm text-portfolio-purple">University of Technology</p>
                      <p className="text-sm text-gray-400">2016 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <a 
                  href="/sample-resume.pdf"
                  className="bg-portfolio-purple text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center"
                  download
                >
                  <FileDown size={16} className="mr-2" />
                  Download Full Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
