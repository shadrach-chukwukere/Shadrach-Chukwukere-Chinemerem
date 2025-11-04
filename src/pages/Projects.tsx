import { useState, type ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import chekbitImage from "@/assets/chekbit.webp";
import { FaExternalLinkAlt } from "react-icons/fa";
import image from "../assets/37d36618868024d8ff36564ae2376b65b2e4999d.webp";
import { Search } from "lucide-react";
import { RiNpmjsFill } from "react-icons/ri";
import { npmProfile } from "../utility";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  github?: string;
  visit?: string;
  icon?: ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypto Trading App",
    description:
      "A modern crypto trading platform built with React, Node.js, and Tailwind CSS. Includes real-time price charts and secure transactions.",
    visit: npmProfile.url,
    icon: <RiNpmjsFill className="object-cover min-w-70 h-56" color="red" />,
  },
  {
    id: 2,
    title: "HuntGame Website",
    description:
      "A responsive Website that connects people freely, making love and companionship simple, safe, and meaningful.",
    image: image,
    visit: "https://hunt-game-pied.vercel.app/",
  },
  {
    id: 3,
    title: "Chekbit — Trade Crypto Securely and Instantly",
    description:
      "A responsive Website to Buy, sell, and manage crypto your way with Chekbit — the secure, peer-to-peer trading platform that gives you full control over your assets.",
    image: chekbitImage,
    visit: "https://chekbit.vercel.app/",
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects?.filter(
    (project) =>
      project?.title.toLowerCase().includes(search.toLowerCase()) ||
      project?.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20 pt-8 max-w-7xl mx-auto px-4">
      {/* Header with right-aligned search */}
      <div className="flex items-center flex-wrap gap-4 justify-between mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold">My Projects</h1>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-40 sm:w-56 px-3 py-2 pl-10 rounded-lg border border-gray-600"
          />
          <Search className="absolute top-3 left-3" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects?.length > 0 ? (
          filteredProjects?.map((project) => (
            <div
              key={project?.id}
              className="rounded-xl overflow-hidden shadow-md flex flex-col bg2"
            >
              <div
                className="h-56 overflow-hidden relative flex justify-center items-center object-cover"
                style={{
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                }}
              >
                {project?.image ? (
                  <LazyLoadImage
                    src={project?.image}
                    alt="chekbitImage"
                    effect="blur"
                    className="object-cover min-w-56"
                    style={{
                      backgroundPositionX: "center",
                      backgroundPositionY: "center",
                    }}
                  />
                ) : (
                  project?.icon
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 truncate">
                  {project?.title}
                </h2>
                <p className="text-sm mb-4 flex-1 line-clamp-3">
                  {project?.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  {project?.visit && (
                    <Link
                      to={project?.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-500 hover:underline"
                    >
                      <FaExternalLinkAlt /> Visit
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400 min-h-100">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
