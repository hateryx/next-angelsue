import LineCard from "./children/LineCard";
import constantsParfum from "./children/constantsParfum.js";
import constantsLotion from "./children/constantsLotion.js";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

function MainLineUp(props) {
  const router = useRouter();
  const lineupId = router.query.id;
  console.log(lineupId);

  const [constantsOfProductToShow, setConstantsOfProductToShow] = useState();

  if (!constantsOfProductToShow) {
    switch (lineupId) {
      case "parfum":
        setConstantsOfProductToShow(constantsParfum);
        break;
      case "lotion":
        setConstantsOfProductToShow(constantsLotion);
        break;
    }
  }

  function titlecase(s) {
    return s
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="w-full bg-white justify-center">
      <div className="mx-auto min-h-screen bg-white">
        <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
          <Link href="/">Home</Link>
          <div className="px-5 text-3xl whitespace-nowrap">
            {titlecase(lineupId)}
          </div>
        </div>
        <div className="my-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 container content-around items-center">
          {constantsOfProductToShow
            ? constantsOfProductToShow.map(
                ({ id, brand, productName, image }) => (
                  <LineCard
                    key={id}
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
