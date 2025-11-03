import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu, Mail } from "lucide-react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { mail } from "../utility";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-[500]"
      style={{
        background:
          "linear-gradient(to bottom, var(--top-bg), var(--bottom-bg))",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center md:px-4 px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="hover:text-gray-300 transition">
            Portfolio
          </Link>

          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>

          <Link to="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>

          <Link target="_blank" to={`mailto:${mail}`} className="">
            <Button className="rounded-xl flex w-auto gap-2">
              Get in Touch <Mail />
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>

        <style>
          {` 
            @media (prefers-color-scheme: dark) {
              :root {
                --top-bg: rgba(17, 17, 17, 1);
                --bottom-bg: rgba(17,17,17,0.7);
              }
            }

            @media (prefers-color-scheme: light) {
              :root {
                --top-bg: rgba(255, 255, 255, 1);
                --bottom-bg: rgba(255,255,255,0.7);
              }
            }
          `}
        </style>
      </div>

      {/* Mobile Fullscreen Dropdown */}
      <div
        className={`fixed inset-0  z-[600] flex flex-col transition-transform bg3 duration-200 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between w-full px-5 py-5">
          <Logo />
          <button
            className="p-2 hover:bg-gray-800 rounded-full"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Centered Menu Items */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-12 text-lg font-medium">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Contact
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Projects
          </Link>

          <Button
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-6 py-3"
          >
            <Link target="_blank" to={`mailto:${mail}`}>
              Download
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
