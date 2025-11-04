import { LazyLoadImage } from "react-lazy-load-image-component";
import webImage from "@/assets/web.webp";
import mobileImage from "@/assets/app.webp";
import serverImage from "@/assets/server.webp";

export default function Feature() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 gap-5 py-6 px-6">
          <div className="max-w-7xl mx-auto text-center md:text-left space-y-4">
            <div className="font-semibold text-2xl sm:text-3xl">
              Precision, Creativity & Scalable Engineering
            </div>
            <div className="font-bold text-lg space-y-2">
              <h4>My Development Edge</h4>
              <p className="text-sm font-normal">
                I build digital products with a wide range of technologies,
                combining clean design, optimized performance, and technical
                precision. My expertise includes React, Next.js, Node.js,
                Express, MySQL, MongoDB, PHP, Laravel, Tailwind CSS, Sass, React
                Native, Expo, REST & GraphQL APIs, Git & GitHub, AWS, Vercel,
                Heroku, UI/UX design, responsive web development, performance
                optimization, SEO, and accessibility.
              </p>
              <p className="text-sm font-normal">
                I blend these skills to deliver fast, reliable, and
                human-centered applications — from web apps and mobile apps to
                complex backend systems.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="grid lg:grid-cols-3 px-2 w-full sm:px-6 xl:px-0 h-full lg:gap-x-5 lg:gap-y-0 gap-y-5 grid-cols-1 min-h-[645.22px]">
          {/* Web Development */}
          <div className="space-y-6 col-span-1 max-h-full">
            <div
              className="bg-green-800 max-h-[640px] p-5 min-h-full flex flex-col justify-between"
              style={{ backgroundColor: "var(--web-bg)" }}
            >
              {/* Text Section */}
              <div className="space-y-4">
                <div className="font-medium text-lg">Web Development</div>
                <div className="text-sm font-light">
                  I create modern, high-performance web experiences using
                  technologies like React, Next.js, and Tailwind CSS. My focus
                  is on building visually stunning interfaces that are both
                  accessible and scalable — ensuring seamless navigation and
                  top-tier responsiveness across all devices.
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex items-center justify-center mt-4">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  fetchPriority="high"
                  src={webImage}
                  decoding="async"
                  className="max-h-full object-contain"
                  alt="Web development illustration"
                />
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="col-span-2 gap-y-6 flex flex-col max-h-full h-full">
            <div
              className=" xl:p-0 p-5 bg-blue-800 overflow-hidden object-cover h-1/2"
              style={{ backgroundColor: "var(--mobile-bg)" }}
            >
              <div className="flex max-w-2xl h-full justify-between sm:flex-nowrap flex-wrap mx-auto items-center">
                <div className="space-y-5">
                  <h3 className="font-medium text-lg">
                    Mobile App Development
                  </h3>
                  <p className="text-sm font-light">
                    I build intuitive, cross-platform mobile apps using React
                    Native — merging speed, elegance, and performance. From
                    sleek UI animations to secure API integration, I make sure
                    every app feels native, loads fast, and delivers a premium
                    experience to users on both Android and iOS.
                  </p>
                </div>
                <div className="">
                  <LazyLoadImage
                    effect="blur"
                    fetchPriority="high"
                    loading="eager"
                    src={mobileImage}
                    className="min-w-[260px] sm:min-w-[320px] md:min-w-[320px] object-contain"
                    alt="Mobile development illustration"
                  />
                </div>
              </div>
            </div>

            {/* Server & Digital Solutions */}
            <div
              className=" xl:p-0 p-5 bg-red-800 overflow-hidden object-cover h-1/2"
              style={{ backgroundColor: "var(--server-bg)" }}
            >
              <div className="flex max-w-2xl justify-between sm:flex-nowrap h-full flex-wrap mx-auto items-center">
                <div className="space-y-5 md:order-last">
                  <h3 className="font-medium text-lg">
                    Server & Digital Solutions
                  </h3>
                  <p className="text-sm font-light">
                    Behind every great product is a powerful system. I develop
                    and manage backend infrastructures using Node.js, Express,
                    and cloud integrations. My solutions are built for security,
                    speed, and scalability — ensuring your digital platforms
                    stay reliable as your business grows.
                  </p>
                </div>
                <div className="">
                  <LazyLoadImage
                    effect="blur"
                    fetchPriority="high"
                    loading="eager"
                    className="min-w-[260px] sm:min-w-[320px] md:min-w-[320px] object-contain"
                    src={serverImage}
                    alt="Server and digital solutions illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (prefers-color-scheme: dark) {
            :root {
              --web-bg: #065f46;
              --mobile-bg: #1e40af;
              --server-bg: #b91c1c;
            }
          }

          @media (prefers-color-scheme: light) {
            :root {
              --web-bg: #d9f99d;
              --mobile-bg: #93c5fd;
              --server-bg: #fca5a5;
            }
          }
        `}
      </style>
    </div>
  );
}
