import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MoveTopPageButton from '../components/MoveTopPageButton';

import ButtonAppBar from "../components/ButtonAppBar";


const NotFound: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h2>404 お探しのページはありませんでした。</h2>
        <MoveTopPageButton />
      </Box>
    </>     
  )
}

export default NotFound;