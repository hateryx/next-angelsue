import { useState, useEffect } from "react";
import Link from "next/link";

function Product(props) {
  const { product, image, summary, routeName } = props;

  const [isCardVisible, setCardIsVisible] = useState();
  const clickHandler = () => {
    props.onClick();
    setCardIsVisible(false);
  };

  useEffect(() => {
    // Scroll to top of page when component is mounted
    setTimeout(() => {
      setCardIsVisible(true);
      document.getElementById("product").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }, 300);
  }, []);

  return (
    <div className="container">
      <div
        id="smalldevicehandler"
        className="absolute h-full inset-0 justify-center items-center z-3 shadow-xl bg-black bg-opacity-40 z-10 md:hidden"
        onClick={clickHandler}
        style={{ animation: "fadeIn 2s ease-in-out" }}
      ></div>
      <div
        className={`${
          isCardVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1/2"
        } relative md:fixed transition-all duration-500 ease-in-out top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-20`}
      >
        <div
          className="absolute h-full inset-0 justify-center items-center z-3 shadow-xl bg-black bg-opacity-40"
          style={{ animation: "fadeIn 2s ease-in-out" }}
          onClick={clickHandler}
        ></div>
        <div
          className={`${
            isCardVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1/2"
          } mx-auto transition-all duration-500 ease-in-out z-50`}
        >
          <div className="min-h-[95] max-w-5xl mx-auto bg-fuchsia-50 md:bg-white shadow-md rounded-md">
            <div className="flex flex-col md:flex-row z-50">
              <div className="z-50">
                <h1
                  id="smalldevicehandler"
                  className={`md:hidden text-center border-x-1 border-t-2 border-fuchsia-500 rounded-t-lg font-semibold text-pink-800 text-3xl py-2 tracking-wider`}
                >
                  {product}
                </h1>
                <img
                  className="mx-auto px-4 md:px-0 h-1/2 md:h-full max-w-sm overflow-hidden md:rounded-l-md"
                  src={image}
                />
              </div>
              <div className="p-6 space-y-6 shadow-lg border-t-2 rounded-r-md mx-auto">
                <h1 className="hidden md:flex font-semibold text-2xl py-2 tracking-wider">
                  {product}
                </h1>
                <div className="font-light leading-relaxed md:w-full">
                  {summary}
                </div>
                <div className="border-b border-black py-2 flex justify-between">
                  <p>Product Lineup</p>
                  <Link href={`/lineup?id=${routeName}`}>
                    <img src="assets/plusIcon.svg" className="h-6 w-6"></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
