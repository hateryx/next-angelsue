import LineCard from "./children/LineCard";
import constantsParfum from "./children/constantsParfum.js";

function MainLineUp(props) {
  return (
    <div className="w-full bg-white justify-center">
      <div className="mx-auto min-h-screen bg-white">
        <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
          <a>Home</a>
          <div className="px-5 text-3xl">Parfum</div>
        </div>
        <div className="my-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 container content-around items-center">
          {constantsParfum.map(({ id, brand, productName, image }) => (
            <LineCard
              key={id}
              brand={brand}
              productName={productName}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLineUp;
