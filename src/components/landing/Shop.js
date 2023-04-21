import ShopCard from "./children/ShopCard";

function Shop() {
  const products = [
    { product: "Magic Cream", image: "assets/products/magiccream.jpg" },
    { product: "Parfum", image: "assets/products/parfum.jpg" },
    { product: "Pimple Cream", image: "assets/products/pimplecream.jpg" },
    { product: "Body Lotion", image: "assets/products/bodylotion.jpg" },
  ];
  return (
    <div className="relative z-8" id="project">
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
              <ShopCard key={index} product={product} image={image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
