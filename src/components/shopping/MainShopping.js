import { useRouter } from "next/router";
import Link from "next/link";
import StarsSVG from "./children/StarsSVG";

function MainShopping(props) {
  const router = useRouter();
  const lineupId = router.query.id;

  return (
    <div className="w-full justify-center bg-white items-center">
      <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
        <Link href="/">Home</Link>
        <div className="px-5 text-3xl whitespace-nowrap">Parfum</div>
      </div>
      <div className="my-5 mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-4 container content-around">
        <div className="px-5 md:hidden">
          <div className="text-xs md:text-base font-semibold py-2 underline underline-offset-8">
            Armani
          </div>
          <div className="text-2xl md:text-3xl font-[1000] py-4 md:py-6 tracking-tight">
            Acqua di Gioia Eau de Parfum
          </div>
          <StarsSVG />
        </div>
        <div className="overflow-hidden md:h-[30rem] mx-10 md:mx-0 justify-center w-fit md:w-full">
          <img
            className="justify-center w-full h-full object-contain z-0 overflow-hidden transition-transform duration-500 transform-gpu scale-75 hover:scale-90"
            src="assets/products/parfum/6.jpg"
            alt="Product Image"
          />
        </div>

        <div className="mx-auto px-5">
          <div className="hidden md:flex flex-col">
            <div className="font-semibold py-2 underline underline-offset-8">
              Armani
            </div>
            <div className="text-3xl font-[1000] py-6 tracking-tight">
              Acqua di Gioia Eau de Parfum
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
