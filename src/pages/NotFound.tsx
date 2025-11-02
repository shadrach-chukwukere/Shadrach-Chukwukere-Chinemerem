import { Link } from "react-router-dom";
import { AlertTriangle, Home, Mail } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0f0f0f] text-white relative">
      {/* 404 Icon */}
      <div className="mb-6 flex items-center justify-center"></div>

      <h1 className="text-6xl md:text-8xl font-bold mb-2 flex items-center justify-center gap-4">
        4
        <div className="bg-white/10 p-6 rounded-full flex items-center justify-center animate-pulse">
          <AlertTriangle className="text-yellow-400 w-16 h-16" />
        </div>
        4
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
        Get back on track.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
        <Link to="/" className="w-full">
          <Button className="rounded-xl w-full py-3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition">
            <Home size={18} />
            Back to Home
          </Button>
        </Link>

        <Link to="/contactUs" className="w-full">
          <Button className="rounded-xl w-full py-3 flex items-center justify-center gap-2 bg-transparent border border-white hover:bg-white hover:text-black transition">
            <Mail size={18} />
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
}
