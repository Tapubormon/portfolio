import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title:
      "IoT-Based Remote Health Monitoring System for Medical Imaging Devices",
    authors:
      "Tapu Chandra Bormon, et al.",
    venue: "Springer Nature ITSS-IoE",
    year: "2025",
    status: "Accepted",
    links: {
      pdf: "#",
      doi: "#",
    },
  },
  {
    title:
      "Wavelet Packet Decomposition and Cross-Correlation Analysis for Improving ECG Signal Classification",
    authors: "Tapu Chandra Bormon",
    venue: "Under Review",
    year: "2025",
    status: "Under Review",
  },
  {
    title:
      "Hybrid Benchmarking of Statistical and Neural Models for Multi-Class Bangla Emotion Classification",
    authors:
      "Tapu Chandra Bormon, et al.",
    venue: "In Preparation",
    year: "2025",
    status: "In Preparation",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Publications() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Publications
        </h1>
        <p className="mt-2 text-gray-600">
          Research articles, manuscripts, and ongoing work.
        </p>
      </div>

      {/* Publication List */}
      <motion.ol
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {publications.map((pub, index) => (
          <motion.li
            key={index}
            variants={item}
            className="relative pl-8"
          >
            {/* Number */}
            <span className="absolute left-0 top-1 text-sm font-semibold text-blue-700">
              [{index + 1}]
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 leading-snug">
              {pub.title}
            </h3>

            {/* Authors */}
            <p className="mt-1 text-sm text-gray-700">
              {pub.authors}
            </p>

            {/* Venue + Year */}
            <p className="mt-1 text-sm text-gray-600">
              <span className="italic">{pub.venue}</span>, {pub.year}
            </p>

            {/* Status Badge */}
            <div className="mt-2 flex items-center gap-3 flex-wrap">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                {pub.status}
              </span>

              {/* Links */}
              {pub.links?.pdf && (
                <a
                  href={pub.links.pdf}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-blue-700"
                >
                  <FileText size={15} />
                  PDF
                </a>
              )}

              {pub.links?.doi && (
                <a
                  href={pub.links.doi}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-blue-700"
                >
                  <ExternalLink size={15} />
                  DOI
                </a>
              )}
            </div>

            {/* subtle divider */}
            <div className="mt-6 border-t border-gray-200" />
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}