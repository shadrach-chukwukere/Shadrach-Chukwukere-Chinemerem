import playstoreImage from "@/assets/Group 1000001887.webp";
import appstoreImage from "@/assets/Group 1000001888.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { beekleandroid, beekleios } from "../utility";
import beekleImage from "../assets/beekellogo.webp";

export default function Banner() {
  return (
    <div className="py-20">
      <div
        className="relative mx-auto max-w-6xl rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url(${beekleImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative p-10 space-y-5 max-w-6xl mx-auto text-white">
          <h2 className="sm:text-[42px] text-3xl font-extrabold text-center">
            Trade Crypto Smarter with{" "}
            <span className="text-blue-500">Beekle</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-normal text-center">
            Join millions of users trading securely and efficiently. Beekle
            gives you the freedom, flexibility, and speed to manage crypto
            anytime, anywhere.
          </p>
          <div>
            <p className="text-lg font-normal text-center">
              Download Beekle Now!
            </p>
            <div className="flex gap-8 flex-wrap items-center justify-center mt-3">
              <Link
                to={beekleandroid}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  src={playstoreImage}
                  alt="Download on Play Store"
                />
              </Link>
              <Link to={beekleios} target="_blank" rel="noopener noreferrer">
                <LazyLoadImage
                  effect="blur"
                  src={appstoreImage}
                  alt="Download on App Store"
                />
              </Link>
            </div>
          </div>
          <div className="justify-center flex">
            <Link
              to="https://beekle.io/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:scale-[1.025] transition text-blue-500 font-bold"
            >
              Visit Beekle Official Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
