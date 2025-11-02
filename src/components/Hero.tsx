import phoneImage from "@/assets/89d6c4aca85aa504fb8ebf4007082bf3bcc269d8.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Hero() {
  return (
    <section className="w-full  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start gap-4">
        {/* Right Phone Image */}
        <div
          className="flex order-first order-last"
          style={{ justifySelf: "center", placeSelf: "center" }}
        >
          <LazyLoadImage
            effect="blur"
            src={phoneImage}
            alt="App Phone"
            loading="lazy"
            className="w-64 md:w-[350px] object-contain"
          />
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
