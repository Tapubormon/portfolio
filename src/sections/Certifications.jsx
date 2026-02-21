import React from "react";
import certImg from "../assets/profile.png"; // placeholder thumbnail

// 🔹 Your certifications data
const certifications = [
  {
    id: 1,
    title: "Frontend Development Libraries V8",
    issuer: "freeCodeCamp",
    img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771649433/frontend_development_libraries_oraaal.png",
    liveLink: "https://www.freecodecamp.org/certification/tapubormon/front-end-development-libraries", // ✅ clickable
  },
  {
    id: 2,
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771649432/data_visualization_ryrnpb.png",
    pdf: "https://www.freecodecamp.org/certification/tapubormon/data-visualization", // ✅ local pdf
  },
  {
    id: 3,
    title: "Ielts Excellence Scholarship",
    issuer: "IDP, The Daily Star",
    img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771649433/Tapu_Chandra_Bormon_page-0001_uwyntk.jpg",
    liveLink: "https://drive.google.com/file/d/1j0iOSsglo2zweQ03Ggu4cr55uyvIkU2i/view?usp=sharing",
  },
  {
    id: 4,
    title: "Certificate of Participation",
    issuer: "University of Wolverhampton",
    img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650291/ITSS-IoE-ID-02_page-0001_1_iy1p7i.jpg",
    pdf: "https://drive.google.com/file/d/1Fr0REZNJ_apP_0th5nCvnfbgSeYD8MmT/view?usp=sharing",
  },
  {
    id: 4,
    title: "Dean's Honor Award",
    issuer: "Uttara University",
    img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650291/Dean_Honor_page-0001_1_vspuff.jpg",
    pdf: "https://drive.google.com/file/d/1wGi5jazQgsdh-OHemkLeJc3zGBRIXlu5/view?usp=sharing",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <h1 className="text-[2.6rem] font-semibold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-[#04dd88] via-[#00dfa4] to-[#23e1bb] bg-clip-text text-transparent">
          Certifications
        </span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}

// ---------- Certification Card ----------
function CertificationCard({ cert }) {
  const link = cert.liveLink || cert.pdf;
  const isClickable = Boolean(link);

  const CardWrapper = ({ children }) =>
    isClickable ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <CardWrapper>
      <div
        className={`group relative overflow-hidden rounded-lg
        shadow-[5px_5px_15px_rgba(0,0,0,0.15)]
        transition-all duration-300
        ${isClickable ? "cursor-pointer hover:-translate-y-1" : "opacity-90"}`}
      >
        {/* Image */}
        <img
          src={cert.img}
          alt={cert.title}
          className="w-full h-[220px] object-cover"
        />

        {/* Hover overlay */}
        <div
          className="pointer-events-none absolute inset-0
          bg-black/0 group-hover:bg-black/20
          transition-colors duration-300"
        />

        {/* Bottom info */}
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-[15px] leading-snug">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
        </div>

        {/* View badge (only if clickable) */}
        {isClickable && (
          <div
            className="absolute z-10 top-3 right-3
            bg-black/70 text-white text-[11px]
            px-3 py-1 rounded-full
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300"
          >
            View
          </div>
        )}
      </div>
    </CardWrapper>
  );
}