import { motion } from "framer-motion";

const publications = [
  {
    authors: "Ashraful, M.; Harun-Ar Rashid, M.; Bormon, T.C.; Kabir, M.R.; Rahman, M.T.; Alauddin, M.; Islam, M.A.; Sadat, S.M.N.",
    year: 2025,
    title:
      "IoT-Based Remote Health Monitoring System for Medical Imaging Devices.",
    venue: "Springer Nature ITSS-IoE",
    status: "Accepted",
    link: "https://drive.google.com/file/d/1IZQEzO2TD_CZ5XOuJnoVWgDd2nowNBIc/view?usp=sharing",
  },
  {
    authors: "Bormon, T.C.; Al Farid, F.; Mansor, S.; Harun-Ar-Rashid, M.; Chowdhury, M.S.A.; Ali, M.S.; Miah, A.S.M.; Islam, M.S.",
    year: "",
    title:
      "Wavelet Packet Decomposition and Cross-Correlation Analysis for Improving ECG Signal Classification",
    venue: "Under Review",
    status: "Under Review",
    link: "https://drive.google.com/file/d/1ZNePBW9PyGz4O6PCrL-2JoyGPa4hYmCd/view?usp=sharing",
  },
  {
    authors: "T. C. Bormon et al.",
    year: "",
    title:
      "Hybrid Benchmarking of Statistical and Neural Models for Multi Class Bangla Emotions Classification",
    venue: "",
    status: "Ready For Submission",
    link: "#",
  },
    {
    authors: "T. C. Bormon et al.",
    year: "",
    title:
      "A Comparative Analysis of Machine Learning and Deep Learning Models for News Classification Using American and Bangladeshi Datasets",
    venue: "",
    status: "Ready For Submission",
    link: "#",
  },
      {
    authors: "T. C. Bormon et al.",
    year: "",
    title:
      "A Machine Learning-Based System for Mental Health Prediction Using Behavioral and Physiological Data",
    venue: "",
    status: "Ready For Submission",
    link: "#",
  },
];

export default function Publications() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Accepted":
        return "text-green-600 font-semibold";
      case "Under Review":
        return "text-amber-600 font-medium";
      case "In Preparation":
        return "text-blue-600 font-medium";
      case "Ready For Submission":
        return "text-blue-600 font-medium";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section
      id="publications"
      className="max-w-7xl mx-auto px-6 py-10"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Publications
        </h2>
      </div>

      {/* Numbered Citation List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ol className="list-decimal pl-10 space-y-2 text-gray-800">
          {publications.map((pub, index) => (
            <li key={index} className="leading-relaxed">
              <span className="font-medium">
                {pub.authors},
              </span>{" "}
              “
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-900 hover:underline"
              >
                {pub.title}
              </a>
              ,”{" "}
              <span className="italic">{pub.venue}</span>, {pub.year}.
              {pub.status && (
                <span className={`text-sm ml-1 ${getStatusStyle(pub.status)}`}>
                  ({pub.status})
                </span>
              )}
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}