import { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Box } from '@mui/material'

function MainHero() {

  return (
    <>
      <Box className="min-h-screen w-fit flex flex-grow relative bg-no-repeat bg-contain bg-top bg-origin-border bg-clip-content" style={{
        backgroundImage: `url("assets/main-hero-3.jpg")`,
        animation: "fadeIn 2s ease-in",
        width: '100%',
        height: '100%'
        // transform: 'scale(1.15)'
      }} />
      {/* // <Image src="/assets/main-hero-3.jpg" fill={true} className="md:py-6 bg-fuchsia-50 h-full w-full relative" style={{
      //   // backgroundImage: `url("assets/hero-main.jpg")`,
      //   animation: "fadeIn 2s ease-in",
      //   objectFit: 'contain',
      //   // transform: 'scale(1.15)'
      // }} /> */}
    </>
  );
}

export default MainHero;
