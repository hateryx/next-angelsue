import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import StarsSVG from "./children/StarsSVG";

import constantsParfum from "../lineups/children/constantsParfum";
import constantsLotion from "../lineups/children/constantsLotion.js";
import constantsCream from "../lineups/children/constantsCream";
import constantsPimple from "../lineups/children/constantsPimple";

function MainShopping() {
  const router = useRouter();
  const shopId = parseInt(router.query.id);

  const [productToDisplay, setProductToDisplay] = useState();
  const [genre, setGenre] = useState();

  useEffect(() => {
    if (shopId >= 10000 && shopId <= 20000) {
      setGenre("Cream");
      const creamProduct = constantsCream.find((item) => item.id === shopId);
      setProductToDisplay(creamProduct);
    } else if (shopId >= 20000 && shopId <= 30000) {
      setGenre("Lotion");
      const lotionProduct = constantsLotion.find((item) => item.id === shopId);
      setProductToDisplay(lotionProduct);
    } else if (shopId >= 30000 && shopId <= 40000) {
      setGenre("Parfum");
      const parfumProduct = constantsParfum.find((item) => item.id === shopId);
      setProductToDisplay(parfumProduct);
    } else {
      setGenre("Pimple Cream");
      const pimpleProduct = constantsPimple.find((item) => item.id === shopId);
      setProductToDisplay(pimpleProduct);
    }
  }, [router.query.id]);

  return (
    <div className="w-full justify-center bg-white items-center">
      <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
        <Link href="/">Home</Link>
        <div className="px-5 text-3xl whitespace-nowrap">
          {genre}
          {shopId}
        </div>
      </div>

      <div className="my-5 mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-4 container content-around">
        <div className="px-5 md:hidden">
          <div className="text-xs md:text-base font-semibold py-2 underline underline-offset-8">
            {productToDisplay ? productToDisplay.brand : ""}
          </div>
          <div className="text-2xl md:text-3xl font-[1000] py-4 md:py-6 tracking-tight">
            {productToDisplay ? productToDisplay.productName : ""}
          </div>
          <StarsSVG />
        </div>
        <div className="overflow-hidden md:h-[30rem] mx-10 md:mx-0 justify-center w-fit md:w-full">
          <img
            className="justify-center w-full h-full object-contain z-0 overflow-hidden transition-transform duration-500 transform-gpu scale-75 hover:scale-90"
            src={productToDisplay ? productToDisplay.image : ""}
            alt="Product Image"
          />
        </div>

        <div className="mx-auto px-5">
          <div className="hidden md:flex flex-col">
            <div className="font-semibold py-2 underline underline-offset-8">
              {productToDisplay ? productToDisplay.brand : ""}
            </div>
            <div className="text-3xl font-[1000] py-6 tracking-tight">
              {productToDisplay ? productToDisplay.productName : ""}
            </div>
            <StarsSVG />
          </div>
          <div>
            <div className="text-xl font-[900] py-3 md:py-5">$98.00</div>
            <div className="text-xs font-semibold tracking-tight">
              or 4 interest-free payments of $24.50
            </div>
            <div className="mt-10 text-lg md:text-xl text-white font-extrabold bg-pink-600 text-center p-5 transition-transform duration-500 transform-gpu scale-90 hover:scale-100">
              ADD TO BAG
            </div>
          </div>
          <div className="max-w-md">
            <div className="mt-20 mb-10 text-2xl font-semibold tracking-tighter">
              Summary
            </div>
            <div className="tracking-wider font-semibold md:font-medium text-sm md:text-lg leading-relaxed">
              Armani Acqua di Gioia Eau de Parfum is a refreshing aquatic
              women's perfume representing the joy of the Mediterranean Sea with
              a blend of jasmine, lemon, and cedar.
            </div>
            <div className="my-8 space-y-4 font-semibold text-sm">
              <div className="border-b border-black py-2 flex justify-between">
                <span>Details</span>
                <img src="assets/plusIcon.svg" className="h-6 w-6" />
              </div>
              <div className="border-b border-black py-2 flex justify-between">
                <span>How to Use</span>
                <img src="assets/plusIcon.svg" className="h-6 w-6" />
              </div>
              <div className="border-b border-black py-2 flex justify-between">
                <span>Ingredients</span>
                <img src="assets/plusIcon.svg" className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainShopping;
