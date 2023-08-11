import React from 'react';
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Get from '../components/ApiGet'
import requests from '../utils/Requests';
import ButtonAppBar from "../components/ButtonAppBar";
import CreateScheduleForm from "../components/CreateScheduleForm";


const NewEvent: React.FC = () => {
  let style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 3,
  };
  Get(requests.healthCheck)
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />        
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <h2 style={style}>スケジュール調整の作成</h2>
          <CreateScheduleForm />
        </Grid>
      </Box>
    </>
  )
}

export default NewEvent;