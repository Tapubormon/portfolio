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
    authors: "Dipto, S.T.; Rahman, M.M.; Bormon, T.C.; Talukder, M.H.; Harun-Ar-Rashid, M.",
    year: "2026",
    title:
      "Fruit Ripeness Classification Using Computer Vision on Hybrid ResNet50 and SVM Architecture",
    venue: "IEEE ICEFronT",
    status: "Conditionally Accepted",
    link: "#",
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
    authors: "Hasan, A.; Bormon, T.C.; Bairagi, A.; Harun-Ar-Rashid, M.; Rahman, M.T.",
    year: "2026",
    title:
      "Comparative ML and DL Approaches for News Classification on American and Bangladeshi Datasets",
    venue: "IEEE ICEFronT",
    status: "Under Review",
    link: "#",
  },
  {
    authors: "Rahim, A.; Bormon, T.C.; Hossain, A.S.M.D.; Alauddin, M.; Harun-Ar-Rashid, M.; Islam, R.",
    year: "2026",
    title:
      "An ML Based Framework for Mental Health Prediction Using Behavioral and Physiological Data",
    venue: "IEEE ICEFronT",
    status: "Under Review",
    link: "#",
  },
    {
    authors: "Reza, M.A.; Ullah, M.; Bormon, T.C.; Islam, M.E.K.S.; Harun-Ar-Rashid, M.; Chowdhury, M.S.A.",
    year: "2026",
    title:
      "DDoS Attack Detection and IP Blocking using HDBSCAN, DBSCAN, GMM, And Isolation Forest",
    venue: "IEEE ICEFronT",
    status: "Under Review",
    link: "#",
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
];

export default function Publications() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Accepted":
        return "text-green-600 font-semibold";
      case "Conditionally Accepted":
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