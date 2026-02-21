// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        Feel free to reach out via email:
      </p>
      <a href="mailto:tapuchandrabormon@example.com" className="text-blue-600 hover:underline">tapuchandrabormon@example.com</a>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Connect</h2>
        <div className="flex gap-4">
          <a href="https://github.com/username" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/username" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=xxxx" className="text-blue-600 hover:underline">Google Scholar</a>
        </div>
      </div>
    </div>
  );
}