function Product(props) {
  const { clickHandler, product, image, details } = props;
  return (
    <div
      className="absolute z-50 inset-x-0 justify-center items-center"
      onClick={clickHandler}
    >
      <div className="min-h-[95] max-w-5xl mx-auto bg-white shadow-md rounded-md">
        <div class="flex flex-row">
          <div>
            <img className="max-w-sm" src={image} />
          </div>
          <div className="p-6 space-y-5">
            <h1 className="font-semibold text-2xl tracking-wider">{product}</h1>
            <div className="font-light leading-relaxed">{details}</div>
            <div className="border-b border-black py-2">Product Lineup</div>
            <div className="border-b border-black py-2">Ingredients</div>
            <div className="border-b border-black py-2">How to Use</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
