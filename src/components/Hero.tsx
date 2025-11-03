import { Code } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";
import { linkendinProfile, npmProfile, phone } from "../utility";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="w-full pb-16 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-4">
        {/* Right Phone Image */}
        <div
          className="flex order-first order-last"
          style={{ justifySelf: "center", placeSelf: "center" }}
        >
          <div className="">
            <Code
              className="w-64 md:w-[350px] h-auto object-contain "
              size={640}
            />
            <div className="flex gap-6" style={{ justifySelf: "center" }}>
              <Link
                to={linkendinProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="s"
              >
                <FaLinkedin
                  size={35}
                  className="cursor-pointer text-blue-500"
                />
              </Link>
              <Link to={`https://wa.me/${phone}`}>
                <FaWhatsapp
                  size={35}
                  className="cursor-pointer text-green-500"
                />
              </Link>

              <Link
                to={npmProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <SiNpm size={35} className="cursor-pointer text-red-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-12 pt-16">
          <h1 className="text-3xl md:text-4xl lg:text-[55px] font-bold leading-[1.4] md:text-left text-center">
            Where design meets results. {"— "}
            <span className="text-[#EA7527] md:text-left text-center">
              I turn your vision into reality
            </span>
          </h1>
          <p className="text-lg md:text-xl  md:text-left text-center">
            I’m Shadrach Chukwukere Chinemerem, a creative full-stack developer
            and designer. I craft modern, high-performing web experiences that
            blend clean code, bold design, and real-world impact. My work
            transforms ideas into digital products that connect, engage, and
            grow — built with precision, purpose, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
