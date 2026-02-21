// src/pages/Home.jsx
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.png";
import cvPDF from "../assets/Tapu_Chandra_Bormon_CV.pdf";

export default function Home() {
  // Research Experience
  const researchExperience = [
    {
      title: "Research Assistant — Volunteer",
      institution: "Uttara University, Bangladesh",
      supervisor: "Md. Harun-Ar-Rashid, Senior Lecturer",
      year: "2022 – Present",
      description: [
        "Conducted literature review and assisted in research methodology design.",
        "Participated in experimental setup, data preprocessing, and quantitative analysis.",
        "Contributed to manuscript preparation, review, and revision under supervision."
      ]
    }
  ];

  // Skills
  const skills = {
    "Programming & Languages": ["C", "C++", "Python", "JavaScript (ES6+)", "MATLAB", "SQL"],
    "Web Development": ["HTML5", "CSS3", "React", "Redux", "Node.js", "Express.js", "MongoDB", "Next.js", "Bootstrap", "Tailwind CSS", "Vite", "Socket.io", "WebRTC"],
    "AI & Machine Learning": ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "NumPy", "Pandas", "Matplotlib", "CNN", "Signal Processing", "Medical Image Processing"],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "Figma", "VS Code", "Render", "npm", "Linux/Unix", "LaTeX", "Cybersecurity"]
  };

  // Highlights
  const publications = [
    { title: "IoT-Based Remote Health Monitoring System for Medical Imaging Devices", status: "Accepted, Springer Nature ITSS-IoE 2025", link: "#" },
    { title: "Wavelet Packet Decomposition and Cross-Correlation Analysis for Improving ECG Signal Classification", status: "Under Review", link: "#" }
  ];

  const projects = [
    { title: "E-commerce Website", description: "React.js, Node.js, Express.js, Redux, MongoDB, PayPal API", link: "#" },
    { title: "Real-time Chat Application", description: "Socket.IO, WebRTC, Node.js, Express.js, MongoDB", link: "#" }
  ];

  const certificates = [
    { title: "Dean’s Honor Award, Uttara University, CSE Department, 2021", link: "#" },
    { title: "AWS Certified Machine Learning - Specialty", link: "#" }
  ];

  return (
    <div className="px-12 md:px-24 py-12 space-y-28">

      {/* HERO SECTION */}
<section className="flex flex-col md:flex-row items-start gap-12">
  {/* Left: Photo */}
  <div className="flex-shrink-0 w-full md:w-1/3">
    <img src={profilePic} alt="Tapu Chandra Bormon" className="w-full h-auto object-cover shadow-lg"/>
  </div>

  {/* Right: Info */}
  <div className="flex-1 space-y-5">
    <h1 className="text-4xl font-bold">Tapu Chandra Bormon</h1>
    <h2 className="text-xl font-semibold text-gray-700">
      CSE Graduate | MERN Stack Developer | Researcher in AI, IoT, Cybersecurity & Healthcare Technology
    </h2>

    {/* Education + Research Assistant */}
    <div className="space-y-1">
      <p className="text-gray-600 font-medium">B.Sc in Computer Science and Engineering, Uttara University (2019 – 2023)</p>
      <p className="text-gray-600 font-medium">Dean’s Honor Award Recipient</p>
      <p className="text-gray-600 font-medium">Research Assistant – Volunteer (2022 – Present), Supervisor: Md. Harun-Ar-Rashid</p>
    </div>

    {/* Short Vision / Research Oriented Intro */}
    <p className="text-gray-700 leading-relaxed mt-4">
      Passionate about leveraging AI, IoT, and web technologies to solve real-world problems, especially in healthcare and diagnostics. I aim to bridge research and development, creating innovative solutions while contributing to academic advancements.
    </p>

    {/* Location & Contact */}
    <p className="text-gray-600 mt-2">Gazipur District, Dhaka, Bangladesh</p>
    <p className="text-gray-600">
      Email: <a href="mailto:tapu.chb99@gmail.com" className="text-blue-700 hover:underline">tapu.chb99@gmail.com</a>
    </p>
    <p className="text-gray-600">
      LinkedIn: <a href="https://linkedin.com/in/tapuchb13" className="text-blue-700 hover:underline">tapuchb13</a> | 
      GitHub: <a href="https://github.com/Tapubormon" className="text-blue-700 hover:underline">Tapubormon</a>
    </p>

    {/* CV Button */}
    <a href={cvPDF} target="_blank" className="inline-block mt-2 border border-gray-700 px-4 py-2 rounded hover:bg-gray-100">
      Open CV
    </a>
  </div>
</section>

      {/* RESEARCH EXPERIENCE */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Research Experience</h2>
        <div className="space-y-6">
          {researchExperience.map((res, i) => (
            <div key={i} className="border-l-4 border-gray-700 pl-6 p-4 rounded-lg bg-gray-50 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{res.title}</h3>
              <p className="text-gray-600">{res.institution} – {res.year}</p>
              <p className="text-gray-600">Supervisor: {res.supervisor}</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {res.description.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.keys(skills).map((cat, i) => (
            <div key={i} className="border p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 bg-white">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[cat].map((s, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Publications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => (
            <div key={i} className="border rounded-xl p-4 bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition">
              <h3 className="font-semibold text-lg">{pub.title}</h3>
              <p className="text-gray-600 mt-2">{pub.status}</p>
              <a href={pub.link} className="text-blue-700 hover:underline mt-2 inline-block">View →</a>
            </div>
          ))}
        </div>
        <Link to="/publications" className="mt-4 inline-block text-blue-700 hover:underline">View All Publications →</Link>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="border rounded-xl p-4 bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition">
              <h3 className="font-semibold text-lg">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>
              <a href={proj.link} className="text-blue-700 hover:underline mt-2 inline-block">View →</a>
            </div>
          ))}
        </div>
        <Link to="/projects" className="mt-4 inline-block text-blue-700 hover:underline">View All Projects →</Link>
      </section>

      {/* CERTIFICATES & AWARDS */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Certificates & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <div key={i} className="border rounded-xl p-4 bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition">
              <h3 className="font-semibold text-lg">{cert.title}</h3>
              <a href={cert.link} className="text-blue-700 hover:underline mt-2 inline-block">View →</a>
            </div>
          ))}
        </div>
        <Link to="/certificates" className="mt-4 inline-block text-blue-700 hover:underline">View All Certificates →</Link>
      </section>

    </div>
  );
}