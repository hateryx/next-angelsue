import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from '@mui/material/styles'
import { Box, useMediaQuery, Paper, Typography } from '@mui/material'

function MainHero() {

  // const matches
  const theme = useTheme()
  const isLGscreenAndDown = useMediaQuery(theme.breakpoints.down('lg'))

  const applyCSSforLGscreenAndUp = "min-h-screen w-fit flex relative bg-no-repeat bg-contain bg-fixed bg-top bg-pink-800"
  const applyCSSforLGscreenAndDown = "min-h-screen w-fit flex relative bg-no-repeat bg-cover bg-fixed bg-right"

  return (
    <Box className={isLGscreenAndDown ? applyCSSforLGscreenAndDown : applyCSSforLGscreenAndUp}
      style={{
        backgroundImage: `url("assets/main-hero-3.jpg")`,
        animation: "fadeIn 2s ease-in",
        width: '100%',
        height: '100%'
        // transform: 'scale(1.15)'
      }}>
      {/* <Box className="absolute flex place-self-center self-center w-full place-content-center items-center inset-0"> */}
      <Paper className="absolute top-1/4 left-10 p-5 bg-opacity-50 bg-pink-800 mx-5 h-fit" elevation={1}>
        <Typography variant={`${isLGscreenAndDown ? 'h4' : 'h3'}`} className="text-white tracking-tight px-3">Be your own kind of</Typography>
        <Typography variant={`${isLGscreenAndDown ? 'h4' : 'h3'}`} className="text-pink-300 tracking-wider px-3 py-3">BEAUTIFUL</Typography>
      </Paper>
    </Box>
  );
}

export default MainHero;
