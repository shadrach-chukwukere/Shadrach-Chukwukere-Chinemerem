import phoneImage from "@/assets/c07f51dbae66aec2add9b75775b0177280c28420 (1).webp";
import { icon1, icon2, icon3 } from "../ui";
import { LazyLoadImage } from "react-lazy-load-image-component";

const features = [
  {
    title: "24/7 Dispute Resolution",
    text: "Our dedicated, professional support team is on standby around the clock to mediate and resolve any trade disputes quickly and fairly, ensuring a just outcome for all parties.",
    icon: icon1,
  },
  {
    title: "User Reputation System",
    text: "Trade confidently by checking comprehensive user ratings, trade history, and verification badges before every transaction. Build trust and trade only with reputable partners.",
    icon: icon2,
  },
  {
    title: "Advanced Wallet Encryption",
    text: "We use state-of-the-art cryptographic standards and multi-factor authentication to protect your wallet, personal data, and all communications.",
    icon: icon3,
  },
];

export default function TrustSection() {
  return (
    <section className=" ">
      <div className="max-w-6xl mx-auto xl:px-0 px-6 grid grid-cols-1 lg:grid-cols-5 sm:gap-0 gap-5 items-center">
        {/* Left column - copy */}
        <div className="lg:col-span-3 mb-8">
          <h2 className="sm:text-5xl text-3xl font-medium leading-tight">
            Security You Can Trust.
          </h2>
          <p className="mt-4 sm:text-2xl text-xl font-medium">
            Control You Deserve.
          </p>

          <hr className="my-10 border-gray-800" />

          <div className="space-y-8 grid sm:grid-cols-2 gap-4 items-center">
            {features.map((f, idx) => (
              <article key={idx} className="space-y-4">
                <div className="w-[40px] h-[40px] rounded-md bg-yellow-400 flex items-center justify-center ">
                  {/* Icon wrapper - use black icon inside yellow square */}
                  <div className="w-4 h-4">{f.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-medium leading-snug">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right column - phone mock */}
        <div className="lg:col-span-2 flex justify-center items-start lg:justify-end">
          {/* soft glow */}

          <LazyLoadImage
            effect="blur"
            src={phoneImage}
            alt="Phone release screen"
            className="w-full h-auto max-w-[440px] object-cover block"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
