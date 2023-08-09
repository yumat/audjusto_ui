import React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { useParams, Link } from "react-router-dom";
// import Typography from '@mui/material/Typography';

import requests from '../utils/Requests';
import ButtonAppBar from "../components/ButtonAppBar";
// import ModifyPayForm from "../components/ModifyPayForm";
import DeletePayButton from "../components/DeletePayButton"



const ModifyPay: React.FC = () => {
  const { id, day } = useParams();
  const groupUrl = "/group/" + id
  
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Grid container justifyContent="center" alignItems="center" style={{ flexWrap: 'wrap' }}>
          {/* <ModifyPayForm /> */}
          <DeletePayButton payDate={day} />
          <Button
            sx={{ width: '100%', marginTop: 1 }}
            variant="outlined"
            color="inherit"
            component={Link}
            to={groupUrl}
          >
            閉じる
          </Button>
        </Grid>
      </Box>
    </>
  )
}

export default ModifyPay;



