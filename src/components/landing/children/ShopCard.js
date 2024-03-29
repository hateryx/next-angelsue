import Image from "next/image";
import { Box, Paper } from '@mui/material'

function ShopCard(props) {
  const { product, image, clickHandler, id } = props;

  return (
    <Paper
      className="max-w-sm rounded relative overflow-hidden shadow-lg mx-auto"
      onClick={clickHandler}
      id={id}
    >
      <div className="w-full overflow-hidden">
        <img
          className="z-0 w-full h-full object-cover overflow-hidden transition-transform duration-300 transform-gpu scale-100 hover:scale-110"
          src={image}
          alt="Product Image"
        />
      </div>
      <Box className="px-6 py-4 z-10 overflow-hidden">
        <div className="font-semibold text-xl  mb-2">{product}</div>
        <p className="text-gray-700 text-base">Shop Now</p>
      </Box>
    </Paper>
  );
}

export default ShopCard;
