import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Github, Linkedin, FileText, Award } from "lucide-react";
import profileImg from "../assets/profile.png";
import CV from "../assets/Tapu_Chandra_Bormon_CV.pdf";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-10">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT — PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex justify-center lg:justify-start"
        >
          <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
            <img
              src={profileImg}
              alt="Tapu Chandra Bormon"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>

        {/* RIGHT — DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Tapu Chandra Bormon
          </h1>

          {/* Title */}
          <p className="mt-2 text-lg text-blue-700 font-medium">
            CSE Graduate • MERN Stack Developer • Research Assistant
          </p>

          {/* Education + CGPA */}
          <p className="mt-3 text-gray-600">
            B.Sc. in Computer Science & Engineering — Uttara University  
            <br className="hidden sm:block" />
            CGPA: <span className="font-medium text-gray-800">3.70/4.00</span> • 
            <span className="ml-1 font-medium text-gray-800">Dean’s Honor Award</span>
          </p>

          {/* Research Interests */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Machine Learning",
              "AI",
              "Signal Processing",
              "Medical Imaging",
              "IoT Healthcare",
              "Cybersecurity",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Short Vision */}
          <p className="mt-6 text-gray-700 leading-relaxed max-w-2xl">
            Research-driven Computer Science graduate focused on applying
            artificial intelligence, signal processing, and IoT technologies to
            solve real-world healthcare and cybersecurity challenges. Actively
            seeking MSc/PhD opportunities and collaborative research work.
          </p>

          {/* Contact Info */}
          <div className="mt-6 text-sm text-gray-600">
            
            {/* Large screen — single line */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Gazipur, Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                tapu.chb99@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                (+880) 195-2387780
              </div>
            </div>

            {/* Small screen — grid */}
            <div className="grid sm:grid-cols-2 gap-3 lg:hidden">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Gazipur, Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                tapu.chb99@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                (+880) 195-2387780
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            
            {/* CV */}
            <a
              href={CV}
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              <FileText size={18} />
              View CV
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Tapubormon"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              <Github size={18} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tapuchb13"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            {/* Certification — Mobile Only */}
            <Link
              to="/certifications"
              className="inline-flex lg:hidden items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              <Award size={18} />
              Certification
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}