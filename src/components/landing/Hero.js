import { useEffect, useState } from "react";

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(-50);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset - 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgPosition = `50% ${scrollPosition * 0.18}px`;

  return (
    <div className="min-h-screen container mx-auto bg-white">
      <section id="about" className="md:py-6 bg-fuchsia-50">
        <div className="max-w-full justify-between mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-full mb-8 md:mb-0 md:px-10">
              <h1 className="py-5 text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-tighter">
                <span className="mt-3 block text-4xl md:text-5xl font-semibold text-pink-600 tracking-wider text-center">
                  Experience the difference
                </span>
              </h1>
              <p className="text-gray-600 font-light leading-relaxed text-lg md:text-xl lg:text-2xl mb-8">
                Embrace your unique beauty with{" "}
                <span className="font-semibold tracking-wide text-2xl text-pink-600">
                  Angel Sue
                </span>{" "}
                cosmetic products. Our products are designed to enhance your
                natural radiance and boost your confidence. Hydrate, brighten,
                and protect your skin with our skincare, and feel good in your
                own skin.{" "}
                <div className="py-6 font-semibold text-pink-600">
                  So go ahead, be your own kind of beautiful.
                </div>
              </p>
            </div>
            <div className="w-full h-screen mx-auto lg:w-2/3">
              <div
                className="bg-cover bg-no-repeat h-screen overflow-hidden"
                style={{
                  backgroundImage: `url("assets/hero-m1.jpg")`,
                  backgroundPosition: bgPosition,
                  maxHeight: "100vh",
                  minHeight: "30vh",
                  animation: "fadeIn 2s ease-in",
                }}
              >
                <div className="h-full flex flex-col justify-between py-6 lg:py-16 mb-4 tracking-tight">
                  <h1
                    style={{ animation: "fadeIn 1s ease-out" }}
                    className="z-5 px-1 sm:px-3 py-5 text-5xl md:text-5xl font-semibold text-pink-800 leading-normal flex flex-col"
                  >
                    Be your own <span className="py-3 lg:py-4">kind of</span>
                  </h1>
                  <h1
                    style={{ animation: "fadeIn 1s ease-out" }}
                    className="z-5 border-y-2 transition-all duration-500 ease-in-out hover:scale-110 border-pink-700 py-4 bg-pink-200 bg-opacity-0 text-center px-0 sm:px-3 block text-5xl lg:text-6xl font-bold text-pink-600 tracking-widest"
                  >
                    BEAUTIFUL
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
