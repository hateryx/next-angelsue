import { useEffect, useState } from "react";

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgPosition = `50% ${scrollPosition * 0.5}px`;

  return (
    <div className="min-h-screen container mx-auto bg-white">
      <section className="mt-10 py-20 bg-fuchsia-50">
        <div className="max-w-4xl justify-between mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-full mb-8 md:mb-0 md:px-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
                Be your own kind of{" "}
                <span className="mt-6 block text-4xl md:text-5xl font-semibold tracking-wider">
                  BEAUTIFUL
                </span>
              </h1>
              <p className="text-gray-600 font-light leading-loose text-lg md:text-xl lg:text-2xl mb-8">
                Embrace your unique beauty with{" "}
                <span className="font-semibold">Angel Sue</span> skincare. Our
                products are designed to enhance your natural radiance and boost
                your confidence. Hydrate, brighten, and protect your skin with
                our skincare, and feel good in your own skin. So go ahead, be
                your own kind of beautiful with <span>Angel Sue</span>.
              </p>
              <a
                href="/register"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
            <div className="w-full mx-auto md:w-1/2">
              <div
                className="bg-cover bg-no-repeat md:h-screen"
                style={{
                  backgroundImage: `url("assets/hero-m1.jpg")`,
                  backgroundPosition: bgPosition,
                  maxHeight: "100vh",
                  minHeight: "40vh",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
