import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { useParams } from "react-router-dom";
// import Typography from '@mui/material/Typography';

import ButtonAppBar from "../components/ButtonAppBar";
// import ModifyPayForm from "../components/ModifyPayForm";
import MoveBackPageButton from '../components/MoveBackPageButton';
import DeletePayButton from "../components/DeletePayButton"



const ModifyPay: React.FC = () => {
  const { id, day } = useParams();
  
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
        <Grid container justifyContent="center" alignItems="center" style={{ flexWrap: 'wrap' }}>
          {/* <ModifyPayForm /> */}
          <DeletePayButton payDate={day} />
          <MoveBackPageButton />
        </Grid>
      </Box>
    </>
  )
}

export default ModifyPay;



