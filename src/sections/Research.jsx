import Card from "../components/Card";

const researchExperiences = [
  {
    title: "Research Assistant / Hybrid",
    subtitle: "Supervisor: Md. Harun-Ar-Rashid, Senior Lecturer -- Uttara University",
    meta: "Edge AI, IoT, Cyber-security, ML, Health",
    year: "2024–Present",
    description:
      "Working on fruit ripeness classification using hybrid deep learning and NLP-based emerging cyber threat intelligence.",
  },
  // Add more research items if needed
];

const workExperiences = [
  {
    title: "Freelance Web Developer / Self-Employed",
    subtitle: "Various Clients",
    meta: "MERN Stack",
    year: "2022–Present",
    description:
      "Developed full-stack applications including SF3D, e-commerce platforms, real-time communication systems, and interactive financial dashboards.",
  },
  // Add more work items if needed
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Research Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Research Experience</h2>
          <div className="space-y-6">
            {researchExperiences.map((res, idx) => (
              <Card key={idx} {...res} />
            ))}
          </div>
        </div>

        {/* Work Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            {workExperiences.map((work, idx) => (
              <Card key={idx} {...work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}