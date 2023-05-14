import LineCard from "./children/LineCard";
import constantsParfum from "./children/constantsParfum.js";
import constantsLotion from "./children/constantsLotion.js";
import constantsCream from "./children/constantsCream";
import constantsPimple from "./children/constantsPimple";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

function MainLineUp() {
  const router = useRouter();
  const lineupId = router.query.id;

  const [constantsOfProductToShow, setConstantsOfProductToShow] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    switch (lineupId) {
      case "parfum":
        setConstantsOfProductToShow(constantsParfum);
        setTitle("Parfum");
        break;
      case "lotion":
        setConstantsOfProductToShow(constantsLotion);
        setTitle("Lotion");
        break;
      case "magic-cream":
        setConstantsOfProductToShow(constantsCream);
        setTitle("Magic Cream");
        break;
      case "pimple-cream":
        setConstantsOfProductToShow(constantsPimple);
        setTitle("Pimple Cream");
        break;
    }
  }, [lineupId]);

  return (
    <div className="w-full bg-white justify-center">
      <div className="mx-auto min-h-screen bg-white">
        <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
          <Link href="/">Home</Link>
          <div id={lineupId} className="px-5 text-3xl whitespace-nowrap">
            {title}
          </div>
        </div>
        <div className="my-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 container content-around items-center">
          {constantsOfProductToShow
            ? constantsOfProductToShow.map(
                ({ id, brand, productName, image }, index) => (
                  <LineCard
                    key={index}
                    id={id}
                    brand={brand}
                    productName={productName}
                    image={image}
                  />
                )
              )
            : ""}
        </div>
      </div>
    </div>
  );
}

export default MainLineUp;
