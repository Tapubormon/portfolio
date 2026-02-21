import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="hidden md:block sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg tracking-tight">
          <Link to="/" className="hover:text-blue-600">
            T.C. Bormon
          </Link>
        </h1>

        <nav className="flex gap-8 text-sm font-medium">
          <HashLink to="/#research" smooth>
            Research
          </HashLink>

          <HashLink to="/#publications" smooth>
            Publications
          </HashLink>

          <HashLink to="/#Project" smooth>
            Project
          </HashLink>

          <Link to="/certifications" className="hover:text-blue-600">
            Certifications
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}