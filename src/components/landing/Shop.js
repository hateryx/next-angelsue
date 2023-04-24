import ShopCard from "./children/ShopCard";
import Product from "../products/Product";
import { useState } from "react";
import { setLazyProp } from "next/dist/server/api-utils";

function Shop() {
  const products = [
    {
      product: "Magic Cream",
      image: "assets/products/magiccream.jpg",
      summary: "",
    },
    { product: "Parfum", image: "assets/products/parfum.jpg", summary: "" },
    {
      product: "Pimple Cream",
      image: "assets/products/pimplecream.jpg",
      summary: "",
    },
    {
      product: "Body Lotion",
      image: "assets/products/bodylotion.jpg",
      summary:
        "Indulge your skin in luxurious hydration with our ultra-nourishing body lotion. Enriched with premium natural ingredients, it deeply moisturizes and soothes dry, dull, or flaky skin, leaving it soft, smooth, and radiant. Whether you want to pamper yourself after a long day or revitalize your skin in the morning, our lightweight and fast-absorbing formula is perfect for all skin types. Enjoy the irresistible fragrance and silky texture that will make you feel refreshed and rejuvenated every time you apply it. Try it today and experience the transformative power of our body lotion!",
    },
  ];

  const [showProduct, setShowProduct] = useState(false);
  const [selectProduct, setSelectProduct] = useState("");
  const clickHandler = (event) => {
    setSelectProduct(products[event.currentTarget.id]);
    setShowProduct(!showProduct);
  };

  return (
    <div className="relative z-8" id="shop">
      {showProduct && (
        <Product
          clickHandler={clickHandler}
          product={selectProduct.product}
          image={selectProduct.image}
          summary={selectProduct.summary}
          // which_project={pickProject}
        />
      )}
      <section className="py-7 sm:py-7 md:py-16 min-h-screen">
        <div className="container mx-auto">
          <div className="flex flex-start">
            <div className="">
              <p className="font-semibold text-center py-5 sm:py-5 md:py-7 text-xl sm:text-xl md:text-2xl">
                Our Products
              </p>
            </div>
          </div>
          {/* {showProjectCard && (
            <ProjectCard
              closeProjectCard={closeProjectCard}
              which_project={pickProject}
            />
          )} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mx-auto content-around items-center">
            {products.map(({ product, image }, index) => (
              <ShopCard
                key={index}
                id={index}
                product={product}
                image={image}
                clickHandler={clickHandler}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
