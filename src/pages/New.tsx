import React from 'react';
import Box from '@mui/material/Box';
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
      <Box component="main" sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>

          <CreateGroupForm />       

      </Box>
    </>     
  )
}

export default New;