import { useRouter } from "next/router";
import Link from "next/link";
import StarsSVG from "./children/starsSVG";
import Image from "next/image";

function MainShopping(props) {
  const router = useRouter();
  const lineupId = router.query.id;

  return (
    <div className="w-full justify-center mx-auto">
      <div className="mx-auto min-h-screen bg-white">
        <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
          <Link href="/">Home</Link>
          <div className="px-5 text-3xl whitespace-nowrap">Parfum</div>
        </div>
        <div className="my-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center container content-around">
          <div className="md:hidden">
            <div className="font-semibold py-2 underline underline-offset-8">
              Armani
            </div>
            <div className="text-3xl font-[1000] py-6 tracking-tight">
              Acqua di Gioia Eau de Parfum
            </div>
            <StarsSVG />
          </div>
          <div className="h-[30rem] mx-20 justify-center border w-fit">
            <img
              className="justify-center w-full h-full object-contain z-0 overflow-hidden"
              src="assets/products/parfum/6.jpg"
              alt="Product Image"
            />
          </div>

          <div className="mx-auto">
            <div className="hidden md:flex flex-col">
              <div className="font-semibold py-2 underline underline-offset-8">
                Armani
              </div>
              <div className="text-3xl font-[1000] py-6 tracking-tight">
                Acqua di Gioia Eau de Parfum
              </div>
              <StarsSVG />
              <div className="text-xl font-bold py-5">$98.00</div>
              <div className="text-xs font-semibold tracking-wide">
                or 4 interest-free payments of $24.50
              </div>
              <div className="mt-10 text-xl text-white font-extrabold bg-black text-center p-5">
                ADD TO BAG
              </div>
            </div>
            <div className="max-w-md">
              <div className="mt-20 mb-10 text-2xl font-semibold tracking-tighter">
                Summary
              </div>
              <div className="tracking-wider text-lg leading-relaxed">
                Armani Acqua di Gioia Eau de Parfum is a refreshing aquatic
                women's perfume representing the joy of the Mediterranean Sea
                with a blend of jasmine, lemon, and cedar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainShopping;
