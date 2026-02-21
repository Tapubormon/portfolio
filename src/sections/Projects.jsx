import React from "react";

const projects = [
  { id: 1, title: "Bootcamp Platform", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650967/image5_jb7lii.png", link: "#" },
  { id: 2, title: "Ai content Summarizer", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650966/image4_slfeh3.png", link: "https://github.com/Tapubormon/AI-based-summarizer" },
  { id: 3, title: "MERN Ecommerce", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650971/image1_swatab.png", link: "https://fullstack-mern-ecommerce-app-2i1m.onrender.com/" },
  { id: 4, title: "Task management App", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650968/image3_hmkusf.png", link: "https://github.com/Tapubormon/taskmate" },
  { id: 5, title: "Ai Caption Generator", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771691015/image2_cfym1p.png", link: "https://github.com/Tapubormon/ai-image-caption-generator" },
  { id: 6, title: "Forex live Chart", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650968/image7_t55wsb.png", link: "#" },
  { id: 7, title: "TTS Learning App", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650967/image6_zxd1vp.png", link: "https://github.com/Tapubormon/node-gtts-learning-app" },
  { id: 8, title: "Forex Client Project", img: "https://res.cloudinary.com/dlnxk6ndp/image/upload/v1771650972/image8_taljkx.png", link: "https://github.com/Tapubormon/superking-forex" },
];

export default function Projects() {
  return (
    <section id="Project" className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Project</h2>
      </div>

      <div className="relative">

        {/* ================= MOBILE GRID ================= */}
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:hidden">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>

        {/* ================= DESKTOP PIXEL PERFECT GRID ================= */}
        <div
          className="hidden lg:grid relative gap-[30px]
          grid-cols-[1fr_1fr_1.3fr_1fr]
          grid-rows-[250px_250px]
          z-0 overflow-hidden"
        >

          <ProjectItem project={projects[0]} className="col-start-1 row-start-1" />
          <ProjectItem project={projects[1]} className="col-start-1 row-start-2" />

          <ProjectItem
            project={projects[2]}
            className="col-start-2 row-start-1 row-span-2"
          />

          <ProjectItem project={projects[3]} className="col-start-3 row-start-1" />

          {/* Nested Perfect Split Cards */}
          <div
            className="col-start-3 row-start-2 grid grid-cols-2 gap-[15px]"
            style={{ height: "250px" }}
          >
            <div className="flex items-stretch">
              <ProjectItem project={projects[4]} className="w-full h-full" />
            </div>

            <div className="flex items-stretch">
              <ProjectItem project={projects[5]} className="w-full h-full" />
            </div>
          </div>

          <ProjectItem project={projects[6]} className="col-start-4 row-start-1" />
          <ProjectItem project={projects[7]} className="col-start-4 row-start-2" />

        </div>

        {/* Gradient Overlay Desktop Only */}
        <div className="hidden lg:block pointer-events-none absolute left-0 bottom-0 w-full h-[60%] z-[2]
          bg-gradient-to-b from-transparent to-black" />

      </div>

      {/* Description */}
      <div className="flex flex-col items-center text-center pt-8">

        <h2 className="text-[18px] sm:text-[20px] leading-[1.5] w-full sm:w-[80%] lg:w-[55%] px-2">
          Highlighting <span className="font-bold text-teal-500">real-world</span> projects that showcase my skills in delivering
          <span className="font-bold text-teal-500"> high-quality, efficient</span>, and
          <span className="font-bold text-teal-500"> user-centric</span> digital experiences.
        </h2>

        <a
          href="https://github.com/Tapubormon"
          target="blank"
          className="mt-4 px-6 py-2 border border-teal-500 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white transition"
        >
          Find projects In Github
        </a>

      </div>
    </section>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectItem({ project, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[4px]
      shadow-[5px_5px_5px_rgba(0,0,0,0.5)]
      transition-all duration-300 cursor-pointer
      h-[210px] sm:h-[240px] lg:h-full ${className}`}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover rounded-[4px]"
      />

      <div className="pointer-events-none absolute inset-0 z-[1]
        bg-black/0 group-hover:bg-black/[0.15]
        transition-colors duration-300" />

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-[3] top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        bg-black/60 text-white
        px-3 py-0
        inline-flex items-center justify-center gap-2
        rounded-full text-xs font-semibold
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300 whitespace-nowrap"
      >
        {project.title}

        <span className="border-l border-white/25 h-5 pl-2 flex items-center">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 2H5v1.5h.75H11.4393L2.21968 12.7197l-.53033.5303 1.06066 1.0607.53034-.5303 9.21846-9.2185V10.25H14V3c0-.5523-.4477-1-1-1H5.75Z"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}