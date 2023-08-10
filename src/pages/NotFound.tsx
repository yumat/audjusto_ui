import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import ButtonAppBar from "../components/ButtonAppBar";


const NotFound: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h2>404 お探しのページはありませんでした。</h2>
      </Box>
    </>     
  )
}

export default NotFound;