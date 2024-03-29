import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

function LineCard(props) {
  const { brand, productName, image, id } = props;
  const router = useRouter();

  return (
    <div className="border bg-grey-500 max-w-xs rounded shadow-lg mx-auto items-center container">
      <div className="flex flex-col items-center justify-center max-h-96 overflow-hidden">
        <Box className="h-96 justify-center" sx={{ position: 'relative' }}>
          <Link href={`/shopping?id=${id}`}>
            <img
              className="justify-center w-full h-full object-contain z-0 overflow-hidden transition-transform duration-500 transform-gpu scale-50 hover:scale-75"
              src={image}
              alt="Product Image"
            />
          </Link>
        </Box>
      </div>
      <div className="px-6 py-4 z-0">
        <div className="font-semibold text-md mb-2">{brand}</div>
        <p className="text-gray-700 text-sm">{productName}</p>
      </div>
    </div>
  );
}

export default LineCard;
