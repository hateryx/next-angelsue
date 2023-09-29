import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import constantsParfum from "../lineups/children/constantsParfum";
import constantsLotion from "../lineups/children/constantsLotion.js";
import constantsCream from "../lineups/children/constantsCream";
import constantsPimple from "../lineups/children/constantsPimple";

import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Container, Typography, useMediaQuery, ShoppingBagOutlined } from "@mui/material";
import { Add, ShoppingBasket, Star } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function MainShopping() {
  const router = useRouter();
  const shopId = parseInt(router.query.id);

  const [productToDisplay, setProductToDisplay] = useState();
  const [genre, setGenre] = useState();
  const [routeName, setRouteName] = useState();

  const theme = useTheme()
  const matchesMDScreenAndBelow = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    if (shopId >= 10000 && shopId <= 20000) {
      setGenre("Magic Cream");
      setRouteName("magic-cream");
      const creamProduct = constantsCream.find((item) => item.id === shopId);
      setProductToDisplay(creamProduct);
    } else if (shopId >= 20000 && shopId <= 30000) {
      setGenre("Lotion");
      setRouteName("lotion");
      const lotionProduct = constantsLotion.find((item) => item.id === shopId);
      setProductToDisplay(lotionProduct);
    } else if (shopId >= 30000 && shopId <= 40000) {
      setGenre("Parfum");
      setRouteName("parfum");
      const parfumProduct = constantsParfum.find((item) => item.id === shopId);
      setProductToDisplay(parfumProduct);
    } else {
      setGenre("Pimple Cream");
      setRouteName("pimple-cream");
      const pimpleProduct = constantsPimple.find((item) => item.id === shopId);
      setProductToDisplay(pimpleProduct);
    }
  }, [router.query.id]);

  const [showDetails, setShowDetails] = useState(false);
  const [showHowToUse, setShowHowToUse] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleShowHowToUse = () => {
    setShowHowToUse(!showHowToUse)
  };

  return (
    <div className="w-full justify-center bg-white items-center">

      <div className="px-5 py-3 items-center text-sm tracking-tighter flex justify-between w-1/6">
        <Link href="/">Home</Link>
        <div className="px-5 text-3xl whitespace-nowrap">
          {" "}
          <Link href={`/lineup?id=${routeName}`}>{genre}</Link>
        </div>
      </div>

      <Box container className="my-5 mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="px-5 md:hidden">
          <div className="text-xs md:text-base font-semibold py-2 underline underline-offset-8">
            {productToDisplay ? productToDisplay.brand : ""}
          </div>
          <div className="text-2xl md:text-3xl font-[1000] py-4 md:py-6 tracking-tight">
            {productToDisplay ? productToDisplay.productName : ""}
          </div>
          <Box>
            <Star /><Star /><Star /><Star /><Star />
          </Box>
        </div>
        {/* <Box sx= {{ position: 'relative' }} className="overflow-hidden md:h-[30rem] mx-10 md:mx-0 justify-center w-fit md:w-full"> */}
        <Box sx={{ position: 'relative' }} className="overflow-hidden h-[30rem] md:mx-0 justify-center w-fit w-full">
          <Image
            className="relative justify-center w-full h-full object-contain z-1 overflow-hidden transition-transform duration-500 transform-gpu scale-75 hover:scale-90"
            src={productToDisplay ? productToDisplay.image : ""}
            alt="Product Image"
            fill={true}
          />
        </Box>

        <div className="mx-auto px-5">
          <div className="hidden md:flex flex-col">

            <div className="font-semibold py-2 underline underline-offset-8">
              {productToDisplay ? productToDisplay.brand : ""}
            </div>
            <div className="text-3xl font-[1000] py-6 tracking-tight">
              {productToDisplay ? productToDisplay.productName : ""}
            </div>
            <Box>
              <Star /><Star /><Star /><Star /><Star />
            </Box>
          </div>
          <Box>
            <div className="text-xl font-[900] py-3 md:py-5">
              {productToDisplay ? productToDisplay.cost : ""}
            </div>
            <div className="text-xs font-semibold tracking-tight">
              or 4 interest-free payments of $24.50
            </div>
            <Button sx={{
              mt: 10,
              fontSize: '1.25rem',
              fontWeight: 'extrabold',
              color: '#db2777',
              border: '2px solid',
              textAlign: 'center',
              padding: '1.25rem',
              transition: 'all 500ms ease',
              transform: 'scale(0.9)',
              '&:hover': {
                transform: 'scale(1)',
                bgcolor: '#C10D5E',
                color: 'white'
              },
              width: '100%'
            }}>
              ADD TO BAG
            </Button>
          </Box>
          <Box className="max-w-md">
            <Box>
              <div className="mt-20 mb-10 text-2xl font-semibold tracking-tighter w-full">
                Summary
              </div>
              <div className="tracking-wider font-semibold md:font-medium text-sm md:text-lg leading-relaxed">
                {productToDisplay ? productToDisplay.summary : ""}
              </div>
            </Box>
            <Box className="my-8 space-y-4 font-semibold text-sm">
              <Accordion expanded={showDetails}>
                <AccordionSummary id="product-details-panel" className="py-2 flex justify-between overflow-hidden" expandIcon={<Add id="test" />} onClick={toggleShowDetails}>
                  Details
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{productToDisplay ? productToDisplay.details : "Hello"}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={showHowToUse}>
                <AccordionSummary id="product-how-to-use-panel" className="py-2 flex justify-between overflow-hidden" expandIcon={<Add />} onClick={toggleShowHowToUse}>
                  How To Use
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{productToDisplay ? productToDisplay.howToUse : ""}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </div>
        <ShoppingBasket sx={{
          position: 'fixed', cursor: 'pointer', right: 10, bottom: 10, border: '10px solid', borderColor:'#db2777' , borderRadius: '50%', m: 3, fontSize: '3rem', bgcolor: '#db2777', zIndex: 5,
          color: 'white', '&:hover': {
            transform: 'scale(1)',
            bgcolor: '#C10D5E',
            borderColor:'#C10D5E',
            color: 'white'
          },
        }} />
      </Box>

    </div>
  );
}

export default MainShopping;
