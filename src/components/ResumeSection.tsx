
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Set the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeSection = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  
  const goToPrevPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  };
  
  const goToNextPage = () => {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1));
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A1E2E] p-8 rounded-xl relative overflow-hidden border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-400 mb-3">{job.company}</p>
                <div className="flex items-center mb-4">
                  <div className="bg-portfolio-purple px-3 py-1 rounded-full text-sm">
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

        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">My Resume</h3>
          <a 
            href="#"
            className="bg-portfolio-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-block"
            download
          >
            Download CV
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[#1A1E2E] p-4 rounded-xl max-w-3xl mx-auto">
            <div className="flex justify-between mb-4">
              <button 
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className={`px-4 py-2 rounded ${pageNumber <= 1 ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-portfolio-purple text-white'}`}
              >
                Previous
              </button>
              <p className="text-center">
                Page {pageNumber} of {numPages}
              </p>
              <button 
                onClick={goToNextPage}
                disabled={pageNumber >= (numPages || 1)}
                className={`px-4 py-2 rounded ${pageNumber >= (numPages || 1) ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-portfolio-purple text-white'}`}
              >
                Next
              </button>
            </div>
            <div className="flex justify-center border border-gray-700 rounded-lg overflow-hidden">
              <Document
                file="/sample-resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="text-center py-10">Loading resume...</div>}
                error={<div className="text-center py-10 text-red-500">Failed to load PDF. Please try again later.</div>}
              >
                <Page 
                  pageNumber={pageNumber} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={window.innerWidth > 768 ? 600 : 300}
                />
              </Document>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
