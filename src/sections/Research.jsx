import Card from "../components/Card";

const researchExperiences = [
  {
    title: "Research Assistant - Volunteer",
    subtitle: "Supervisor: Md. Harun-Ar-Rashid, Senior Lecturer -- Uttara University",
    meta: "Edge AI, IoT, Cyber-security, ML, Health",
    year: "2023–Present",
    description:
      "Working on anomaly detection, federated learning, and intelligent security systems for IoT environments.",
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
      "Developed full-stack web applications, e-commerce platforms, real-time chat apps, and financial dashboards using React, Node.js, Express, MongoDB, and WebRTC.",
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