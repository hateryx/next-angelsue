import { Fragment, useState, useEffect } from "react";

function Product(props) {
  const { product, image, summary, color } = props;

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
    }, 200);
  }, []);

  return (
    <div
      className={`${
        isCardVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-1/2"
      } bg-[${color}] transition-all duration-500 ease-in-out fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-50`}
      onClick={clickHandler}
    >
      <div
        className={`${
          isCardVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1/2"
        } transition-all duration-500 ease-in-out absolute z-50 inset-x-0 inset-y-20 justify-center items-center`}
      >
        <div
          id="product"
          className="min-h-[95] max-w-5xl mx-auto bg-white shadow-md rounded-md"
        >
          <div class="flex flex-col md:flex-row">
            <div>
              <img
                className="max-w-sm overflow-hidden rounded-l-md"
                src={image}
              />
            </div>
            <div className="p-6 space-y-6 shadow-lg border-t-2 rounded-r-md">
              <h1 className="font-semibold text-2xl py-2 tracking-wider">
                {product}
              </h1>
              <div className="font-light leading-relaxed w-full">{summary}</div>
              <div className="border-b border-black py-2">Product Lineup</div>
              <div className="border-b border-black py-2">Ingredients</div>
              <div className="border-b border-black py-2">How to Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
