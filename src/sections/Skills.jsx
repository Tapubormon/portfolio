import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "JavaScript (ES6+)", "MATLAB", "SQL"],
  },
  {
    category: "Web Development",
    skills: [
      "HTML5", "CSS3", "jQuery", "React", "Redux", "Next.js", "EJS",
      "Bootstrap", "Tailwind CSS", "Vite", "WebRTC", "Socket.io",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "MySQL",
      "RESTful APIs", "JWT",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "NumPy", "Pandas",
      "Matplotlib", "NLP (DistilBERT)", "CNN", "CTI", "OSINT"
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "Render", "npm", "Linux Security", "Wireshark"],
  },
  {
    category: "Others",
    skills: ["LaTeX", "Linux/Unix (terminal & scripting)", "Cybersecurity"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
           Technical Skills
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}