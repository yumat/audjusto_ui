import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

import ButtonAppBar from "../components/ButtonAppBar";
import MoveCreateGroupPageButton from "../components/MoveCreateGroupPageButton";


const Home: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 1  }}>
        <Toolbar />
        {/* <Typography> */}
                   

          <MoveCreateGroupPageButton/>

      </Box>
    </>     
  )
}

export default Home;



