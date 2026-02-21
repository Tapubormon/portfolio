import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const researchProjects = [
  {
    title: "ML and DL Approaches for Bangla Sentiment Classification",
    description:
      "We evaluated eight models for Bangla sentiment analysis, including four machine learning models (RF, DT, SVM, LR) and four deep learning models (CNN, Bi-LSTM, Bi-GRU, and fine-tuned CNN) on two multiclass emotion datasets (6 and 7 classes) to compare their performance.",
    link: "https://github.com/Tapubormon/Sentiment-Analayis-Using-ML-And-DL-Models",
    year: "2024–2025",
  },
  {
    title: "Hybrid Deep Learning Approach for Fruit Ripeness Classification",
    description:
      "This study proposes a hybrid deep learning model for fruit ripeness classification to improve prediction accuracy and effectively distinguish ripeness stages using fruit image data.",
    link: "https://github.com/swajan21/Fruit_Ripeness_Classification_thesis_paper",
    year: "Ongoing",
  },
  {
    title: "Early Detection of Emerging Cyber Threats Using NLP-Based Social Media Intelligence",
    description:
      "An ongoing cyber threat intelligence project that uses an end-to-end NLP pipeline to detect emerging cyber threats from Reddit posts and external links, combining DistilBERT-based classification, NER, IOC extraction, and external verification to improve detection reliability.",
    link: "https://github.com/Tapubormon/threat-intelligence-nlp",
    year: "Ongoing",
  },
//   {
//     title: "Neural Network Compression",
//     description:
//       "Optimized deep learning models for mobile deployment using pruning and quantization.",
//     link: "https://github.com/username/nn-compression",
//     year: "2023",
//   },
];

export default function ResearchProjects() {
  const maxVisible = 3;
  const containerRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState("none");
  const [showIndicator, setShowIndicator] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;

    if (children.length > maxVisible) {
      let height = 0;

      for (let i = 0; i < maxVisible; i++) {
        height += children[i].offsetHeight;
      }

      height += (maxVisible - 1) * 40;

      setMaxHeight(`${height}px`);
      setShowIndicator(true);
    }
  }, []);

  /* Scroll detection */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 10;

      setIsAtBottom(isBottom);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldScroll = researchProjects.length > maxVisible;

  return (
    <section id="research" className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-12">
        Research Projects
      </h2>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        style={{
          maxHeight: shouldScroll ? maxHeight : "none",
        }}
        className={`relative space-y-10 scroll-container ${
          shouldScroll ? "overflow-y-auto pr-4" : ""
        }`}
      >
        {researchProjects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg 
                       border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-500 hover:underline font-medium"
                >
                  <FaGithub className="w-4 h-4" /> GitHub
                </a>
              )}

              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
                {project.year}
              </span>
            </div>
          </div>
        ))}

        {/* Bottom Scroll Hint Gradient + Arrow */}
        <AnimatePresence>
          {showIndicator && containerRef.current && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none sticky bottom-0 h-14 w-full 
                         bg-gradient-to-t from-white via-white/70 to-transparent flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-black text-lg"
              >
                {isAtBottom ? <FaChevronUp /> : <FaChevronDown />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hide scrollbar */}
      {shouldScroll && (
        <style jsx>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      )}
    </section>
  );
}