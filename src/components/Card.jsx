import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Card({
  variant = "publication",
  title,
  subtitle,
  description,
  meta,
  year,
  link,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-sm p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
        )}

        {(meta || year) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {meta && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                {meta}
              </span>
            )}
            {year && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                {year}
              </span>
            )}
          </div>
        )}

        {description && (
          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            View
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {variant === "publication" && (
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-600 opacity-70" />
      )}
    </motion.div>
  );
}