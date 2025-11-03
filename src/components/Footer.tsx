import { Link, useLocation } from "react-router-dom";
import Logo from "./ui/Logo";
import { phone, scroll } from "../utility";
import { Phone } from "lucide-react";

export default function Footer() {
  const link = useLocation().pathname;
  return (
    <footer className="border-t border-[#726F6F] shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 flex-wrap text-center sm:text-left">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <Logo />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-8 text-sm">
            <Link
              to={"/contact"}
              className={`${link == "/contact" && "text-[#EA7527]"}`}
            >
              Contact
            </Link>
            <Link
              to={"/projects"}
              className={`${link == "/projects" && "text-[#EA7527]"}`}
            >
              Projects
            </Link>

            <Link
              to={`tel:${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Phone className="text-2xl" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="w-full text-center text-sm border-t border-gray-800 pt-4 sm:border-none sm:pt-0 sm:w-auto sm:text-right">
            © 2025 All rights reserved{" "}
            <span className=" font-medium">shadrach</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
