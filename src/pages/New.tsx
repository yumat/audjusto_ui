import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import ButtonAppBar from "../components/ButtonAppBar";
import CreateGroupButton from "../components/CreateGroupButton";


const New: React.FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* <Typography> */}

          <CreateGroupButton />         

        {/* </Typography> */}
      </Box>
    </>     
  )
}

export default New;