import React from 'react';
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ButtonAppBar from "../components/ButtonAppBar";
import AddScheduleForm from '../components/AddScheduleForm';


const AddSchedule: React.FC = () => {
  let style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 3,
  };

  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />        
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <h2 style={style}>候補日の追加</h2>
          <AddScheduleForm />
        </Grid>
      </Box>
    </>
  )
}

export default AddSchedule