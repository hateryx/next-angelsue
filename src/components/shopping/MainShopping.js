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
  const [routeName, setRouteName] = useState();

  useEffect(() => {
    if (shopId >= 10000 && shopId <= 20000) {
      setGenre("Magic Cream");
      setRouteName("magic-cream");
      const creamProduct = constantsCream.find((item) => item.id === shopId);
      setProductToDisplay(creamProduct);
    } else if (shopId >= 20000 && shopId <= 30000) {
      setGenre("Lotion");
      setRouteName("lotion");
      const lotionProduct = constantsLotion.find((item) => item.id === shopId);
      setProductToDisplay(lotionProduct);
    } else if (shopId >= 30000 && shopId <= 40000) {
      setGenre("Parfum");
      setRouteName("parfum");
      const parfumProduct = constantsParfum.find((item) => item.id === shopId);
      setProductToDisplay(parfumProduct);
    } else {
      setGenre("Pimple Cream");
      setRouteName("pimple-cream");
      const pimpleProduct = constantsPimple.find((item) => item.id === shopId);
      setProductToDisplay(pimpleProduct);
    }
  }, [router.query.id]);

  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleHowToUse, setToggleHowToUse] = useState(false);
  const [detailHeight, setDetailHeight] = useState(0);
  const [howToUseHeight, sethowToUseHeight] = useState(0);

  useEffect(() => {
    const targetHeight = document.getElementById("detailsContent");
    const specHeight = Math.ceil(targetHeight.offsetHeight / 50) * 50;
    setDetailHeight(specHeight);
  }, [toggleDetails]);

  const toggleHandler = (e) => {
    if (e.target.id == "toggleDetails") {
      setToggleDetails(!toggleDetails);

      // const targetHeight = document.getElementById("detailsContent");
      // const specHeight = Math.ceil(targetHeight.offsetHeight / 10) * 10;
      // setDetailHeight(specHeight);
      // console.log(detailHeight);
    }
    if (e.target.id == "toggleHowToUse") {
      setToggleHowToUse(!toggleHowToUse);

      const targetHeight = document.getElementById("howToUseContent");
      const specHeight = Math.ceil(targetHeight.offsetHeight / 10) * 10;
      sethowToUseHeight(specHeight);
    }
  };

  return (
    <div className="w-full justify-center bg-white items-center">
      <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
        <Link href="/">Home</Link>
        <div className="px-5 text-3xl whitespace-nowrap">
          {" "}
          <Link href={`/lineup?id=${routeName}`}>{genre}</Link>
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
            className="justify-center w-full h-full object-contain z-10 overflow-hidden transition-transform duration-500 transform-gpu scale-75 hover:scale-90"
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
            <div className="text-xl font-[900] py-3 md:py-5">
              {productToDisplay ? productToDisplay.cost : ""}
            </div>
            <div className="text-xs font-semibold tracking-tight">
              or 4 interest-free payments of $24.50
            </div>
            <div className="mt-10 text-lg md:text-xl text-white font-extrabold bg-pink-600 text-center p-5 transition-transform duration-500 transform-gpu scale-90 hover:scale-100">
              ADD TO BAG
            </div>
          </div>
          <div className="max-w-md">
            <div className="mt-20 mb-10 text-2xl font-semibold tracking-tighter w-full">
              Summary
            </div>
            <div className="tracking-wider font-semibold md:font-medium text-sm md:text-lg leading-relaxed">
              {productToDisplay ? productToDisplay.summary : ""}
            </div>
            <div className="my-8 space-y-4 font-semibold text-sm">
              <div className="py-2 flex justify-between overflow-hidden">
                <span>Details</span>
                <img
                  src="assets/plusIcon.svg"
                  className="h-5 w-5 z-10"
                  onClick={toggleHandler}
                  id="toggleDetails"
                />
              </div>
              <div>
                <div
                  id="detailsContent"
                  className={`${
                    toggleDetails
                      ? "translate-y-0"
                      : `-mb-[200px] opacity-0 -translate-y-full`
                  } font-normal transition-all duration-300 ease-in-out py-3 text-center overflow-hidden min-h-[200px] max-h-[200px]`}
                >
                  <div className="my-3">
                    {productToDisplay ? productToDisplay.details : ""}
                  </div>
                </div>
                <div className="border-t border-black my-2" />
              </div>

              <div className="py-2 flex justify-between">
                <span>How to Use</span>
                <img
                  src="assets/plusIcon.svg"
                  className="h-5 w-5 z-10"
                  onClick={toggleHandler}
                  id="toggleHowToUse"
                />
              </div>
              <div className="transition">
                <div
                  id="howToUseContent"
                  className={`${
                    toggleHowToUse
                      ? "translate-y-0"
                      : `-mb-[100px] opacity-0 -translate-y-full`
                  } font-normal flex items-center justify-center transition-all duration-300 ease-in-out py-3 overflow-hidden max-h-[100px] min-h-[100px]`}
                >
                  <div className="my-3">
                    {productToDisplay ? productToDisplay.howToUse : ""}
                  </div>
                </div>
                <div className="border-t border-black my-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainShopping;
