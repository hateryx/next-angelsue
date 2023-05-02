import ShopCard from "./children/ShopCard";
import Product from "../products/Product";
import products from "./constants/constantsForShop.js";

import { useState, useEffect } from "react";

function Shop() {
  const [showProduct, setShowProduct] = useState(false);
  const [selectProduct, setSelectProduct] = useState("");
  const clickHandler = (event) => {
    setSelectProduct(products[event.currentTarget.id]);
    setShowProduct(!showProduct);
    // !showProduct
    //   ? (document.body.style.overflow = "hidden")
    //   : (document.body.style.overflow = "scroll");
  };

  function productLandClick() {
    setTimeout(() => {
      setShowProduct(!showProduct);
      // !showProduct
      //   ? (document.body.style.overflow = "hidden")
      //   : (document.body.style.overflow = "scroll");
    }, 200);
  }

  return (
    <div className="relative z-8" id="shop">
      <section className="py-7 sm:py-7 md:py-16 min-h-screen">
        <div className="flex flex-start justify-center">
          <p
            id="product"
            className="font-semibold text-pink-600 text-center tracking-tight py-8 sm:py-5 md:py-7 text-3xl md:text-4xl"
          >
            Our Products
          </p>
        </div>
        {showProduct && (
          <Product
            clickHandler={clickHandler}
            color={selectProduct.color}
            product={selectProduct.product}
            image={selectProduct.image}
            summary={selectProduct.summary}
            routeName={selectProduct.routeName}
            onClick={productLandClick}
          />
        )}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mx-auto container content-around items-center">
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
      </section>
    </div>
  );
}

export default Shop;
