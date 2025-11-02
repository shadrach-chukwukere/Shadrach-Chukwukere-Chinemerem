import image from "@/assets/37d36618868024d8ff36564ae2376b65b2e4999d.webp";

export default function Trading() {
  const steps = [
    {
      title: "Sign Up & Verify",
      description:
        "Create your secure shadrach account in minutes. Complete a quick verification process to unlock full trading power and access to all global offers.",
    },
    {
      title: "Find or Create a Deal",
      description:
        "Browse thousands of active offers from other users, filtering by asset, amount, and your preferred payment method. Alternatively, create your own offer to buy or sell at your desired price.",
    },
    {
      title: "Trade Securely",
      description:
        "Initiate the trade, which automatically locks the crypto in our secure escrow. Complete the payment, confirm receipt, and the crypto is instantly released to your shadrach wallet.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 py-10">
      {/* Left Image */}
      <div className="col-span-2 object-cover flex justify-center items-center bg-gray-100">
        <img
          loading="lazy"
          src={image}
          alt="Trading"
          className="w-full min-w-full min-h-full min-w-[100%] md:max-h-[600px] max-h-[500px] h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="col-span-3 flex flex-col justify-center gap-6 p-8 md:p-12 bg-[#EA7527] text-[#101828]">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Trading in 3 Simple Steps
        </h2>
        <p className="text-base md:text-lg">
          A seamless and intuitive process designed for both beginners and
          experienced traders.
        </p>

        <div className="flex flex-col gap-4 mt-2">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center   font-bold rounded-lg text-lg">
                {index + 1}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
