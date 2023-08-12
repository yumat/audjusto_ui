import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import Get from '../components/ApiGet'
import requests from '../utils/Requests';
import ButtonAppBar from "../components/ButtonAppBar";
import CreateGroupForm from "../components/CreateGroupForm";


const New: React.FC = () => {
  let style = {
    fontSize: 24
  };
  Get(requests.healthCheck)
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1 style={style}>グループの作成</h1>
          <CreateGroupForm />
      </Box>
    </>
  )
}

export default New;