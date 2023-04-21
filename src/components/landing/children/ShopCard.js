function ShopCard(props) {
  const { product, image } = props;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product}</div>
        <p className="text-gray-700 text-base">Shop Now</p>
      </div>
    </div>
  );
}

export default ShopCard;
