import ShopCard from "./children/ShopCard";
import Product from "../products/Product";
import { useState } from "react";
import { setLazyProp } from "next/dist/server/api-utils";

function Shop() {
  const products = [
    {
      product: "Magic Cream",
      image: "assets/products/magiccream.jpg",
      color: "#f6c9de",
      summary:
        "Transform your skin with our beauty magic cream, your new secret weapon for a flawless complexion. Our luxurious cream is infused with a powerful blend of natural and scientific ingredients, carefully selected to target multiple skin concerns. Whether you want to reduce the appearance of fine lines, brighten your complexion, or hydrate dry skin, our versatile formula has got you covered. The rich texture glides smoothly onto your skin, providing instant hydration and nourishment that lasts all day. Our magic cream is perfect for all skin types, and is gentle enough for daily use. ",
    },
    {
      product: "Parfum",
      image: "assets/products/parfum.jpg",
      summary:
        "Experience the captivating allure of our exquisite parfum collection, featuring a range of sophisticated fragrances for every mood and occasion.  Our product lineup includes an array of fragrances, each with its unique character and personality. From floral and fruity scents to woody and musky notes, our parfum collection has something for everyone. Our long-lasting formulas are designed to stay on your skin for hours, allowing you to enjoy the luxurious scent all day long. Packaged in elegant bottles, our parfums make the perfect gift for yourself or someone special. Explore our collection and discover your new signature scent today.",
    },
    {
      product: "Pimple Cream",
      image: "assets/products/pimplecream.jpg",
      summary:
        "Say goodbye to pesky pimples with our powerful pimple cream. Our dermatologist-tested formula is specially designed to target blemishes and breakouts, leaving your skin clear, smooth, and radiant. Infused with a potent blend of natural and scientific ingredients, our cream works to unclog pores, reduce inflammation, and prevent future breakouts. The lightweight and non-greasy formula absorbs quickly into the skin, providing instant relief and long-lasting results. Suitable for all skin types, our pimple cream is gentle enough for daily use, and won't dry out or irritate your skin. Get ready to say hello to clear, beautiful skin and boost your confidence with our pimple cream. Try it today and see the difference for yourself!",
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
    !showProduct
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
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
