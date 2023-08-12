import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material'
// import Typography from '@mui/material/Typography';

import HowToUseCulc from "../components/HowToUseCulc"
import ButtonAppBar from "../components/ButtonAppBar";



const HowToUse: React.FC = () => {

  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <HowToUseCulc/>

        </Grid>
      </Box>
    </>
  )
}

export default HowToUse;



