
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Set the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const RESUME_PDF_PATH = "/sample-resume.pdf";

const ResumeSection = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    console.log("Loaded PDF with", numPages, "pages.");
    setNumPages(numPages);
  };
  
  
  const goToPrevPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  };
  
  const goToNextPage = () => {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1));
  };

  const handleDownloadCV = () => {
    // Create an anchor element and set properties for download
    const link = document.createElement('a');
    link.href = RESUME_PDF_PATH;
    link.download = "resume.pdf"; // This sets the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experienceData = [
    {
      title: "React.js Developer",
      company: "",
      period: "March 2024 - June 2024",
      duties: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Optimized application performance with lazy loading, code splitting, and reusable component architecture.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ]
    },
    {
      title: "Java Developer",
      company: "",
      period: "July 2024 - Present",
      duties: [
        "Solved 300+ coding problems across platforms like LeetCode, Codeforces, and HackerRank to strengthen algorithmic thinking.",
        "Specialized in solving problems involving arrays, recursion, dynamic programming, and graph algorithms.",
        "Regularly participated in coding contests, improving speed and accuracy under timed conditions."
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-portfolio-purple">Tech</span> Skills
          </h2>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A1E2E] p-8 md:p-10 rounded-xl relative overflow-hidden border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">{job.title}</h3>
                <p className="text-gray-400 mb-3 md:mb-4 text-xl md:text-2xl">{job.company}</p>
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-portfolio-purple px-4 py-2 rounded-full text-lg md:text-xl">
                    {job.period}
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 md:space-y-3">
                  {job.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex} className="text-gray-300 text-lg md:text-xl">{duty}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">My Resume</h3>
          <button 
            onClick={handleDownloadCV}
            className="bg-portfolio-purple text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-block text-lg md:text-xl"
          >
            Download CV
          </button>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-10 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[#1A1E2E] p-4 md:p-6 rounded-xl max-w-3xl mx-auto w-full">
            <div className="flex justify-between mb-4 md:mb-6">
              <button 
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className={`px-4 py-2 md:px-6 md:py-3 rounded text-lg md:text-xl ${pageNumber <= 1 ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-portfolio-purple text-white'}`}
              >
                Previous
              </button>
              <p className="text-center text-lg md:text-xl flex items-center">
                Page {pageNumber} of {numPages}
              </p>
              <button 
                onClick={goToNextPage}
                disabled={pageNumber >= (numPages || 1)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded text-lg md:text-xl ${pageNumber >= (numPages || 1) ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-portfolio-purple text-white'}`}
              >
                Next
              </button>
            </div>
            <div className="flex justify-center border border-gray-700 rounded-lg overflow-hidden">
              <Document
                file={RESUME_PDF_PATH}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="text-center py-10 text-xl md:text-2xl">Loading resume...</div>}
                error={<div className="text-center py-10 text-red-500 text-xl md:text-2xl">Failed to load PDF. Please try again later.</div>}
              >
                <Page 
                  pageNumber={pageNumber} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={window.innerWidth > 768 ? (window.innerWidth > 1280 ? 800 : 600) : 300}
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