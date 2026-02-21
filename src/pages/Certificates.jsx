// src/pages/Publications.jsx
import Card from "../components/Card";

export default function Publications() {
  const publications = [
    { title: "Mental Health Prediction using ML", authors: "T.C. Bormon et al.", year: 2025, status: "Accepted", link: "#" },
    { title: "IoT Security Enhancement", authors: "T.C. Bormon et al.", year: 2025, status: "Published", link: "#" },
    // Add more publications here
  ];

  return (
    <div className="container mx-auto px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Publications</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {publications.map((pub, i) => (
          <Card key={i} title={pub.title} subtitle={`${pub.authors} (${pub.year})`} description={`Status: ${pub.status}`} link={pub.link}/>
        ))}
      </div>
    </div>
  );
}