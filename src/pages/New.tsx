import React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import Get from '../components/ApiGet'
import requests from '../utils/Requests';
import ButtonAppBar from "../components/ButtonAppBar";
import CreateGroupForm from "../components/CreateGroupForm";


const New: React.FC = () => {
  Get(requests.healthCheck)
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h2>グループの作成</h2>
        {/* <Grid container justifyContent="center" alignItems="center" style={{ flexWrap: 'wrap' }}> */}
          <CreateGroupForm />
        {/* </Grid> */}
      </Box>
    </>
  )
}

export default New;