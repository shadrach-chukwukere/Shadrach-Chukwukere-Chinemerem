import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import image from "../assets/37d36618868024d8ff36564ae2376b65b2e4999d.webp";
import { Search } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypto Trading App",
    description:
      "A modern crypto trading platform built with React, Node.js, and Tailwind CSS. Includes real-time price charts and secure transactions.",
    image: image,
    github: "https://github.com/yourusername/crypto-app",
    demo: "https://crypto-app.example.com",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "A responsive e-commerce web application using Next.js, React, and Stripe for payment processing.",
    image: image,
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce.example.com",
  },
  {
    id: 2,
    title: "Online Medications",
    description:
      "A responsive e-commerce web application using Next.js, React, and Stripe for payment processing.",
    image: image,
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce.example.com",
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20 pt-8 max-w-7xl mx-auto px-4">
      {/* Header with right-aligned search */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold">My Projects</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-40 sm:w-56 px-3 py-2 pr-10 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute top-2.5 right-3" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-md flex flex-col bg2"
            >
              <div className="w-full h-56 overflow-hidden relative">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 truncate">
                  {project.title}
                </h2>
                <p className="text-sm mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-500 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
