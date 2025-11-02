import { Link } from "react-router-dom";
import Logo from "../assets/hat.png";

export default function Footer() {
    return (
        <footer className="bg-[#101010] border-t border-[#726F6F] text-gray-300">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-10 flex-wrap text-center sm:text-left">

                    {/* Logo */}
                    <div className="flex justify-center sm:justify-start w-full sm:w-auto items-center gap-2">
                        <img
                            src={Logo}
                            alt="Chekbit Logo"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-white font-semibold text-lg">Chekbit</span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
                        <Link
                            to="/download"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Download
                        </Link>
                        <Link
                            to="/contact-us"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/privacy-policy"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="w-full text-center text-sm text-gray-500 border-t border-gray-800 pt-4 sm:border-none sm:pt-0 sm:w-auto sm:text-right">
                        © {new Date().getFullYear()} All rights reserved{" "}
                        <span className="text-white font-medium">Chekbit</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
