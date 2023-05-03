function LineCard(props) {
  const { brand, productName, image } = props;

  return (
    <div className="border bg-grey-500 max-w-xs rounded shadow-lg mx-auto items-center container">
      <div className="flex flex-col items-center justify-center max-h-96 overflow-hidden">
        <div className="h-96 justify-center">
          <img
            className="justify-center h-full object-contain z-0 overflow-hidden transition-transform duration-500 transform-gpu scale-50 hover:scale-75"
            src={image}
            alt="Product Image"
          />
        </div>
      </div>
      <div className="px-6 py-4 z-0">
        <div className="font-semibold text-md mb-2">{brand}</div>
        <p className="text-gray-700 text-sm">{productName}</p>
      </div>
    </div>
  );
}

export default LineCard;
