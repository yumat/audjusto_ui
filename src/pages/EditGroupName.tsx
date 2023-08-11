import React from 'react';
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";

import MoveBackPageButton from '../components/MoveBackPageButton';
import ButtonAppBar from "../components/ButtonAppBar";
import ModifyGroupNameForm from '../components/ModifyGroupNameForm';


const EditGroupName: React.FC = () => {
  const navigate = useNavigate();
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
        <Grid container justifyContent="left" alignItems="left" direction="column">
          <h2 style={style}>グループ名の編集</h2>
          <ModifyGroupNameForm />
          <MoveBackPageButton />
        </Grid>
      </Box>
    </>
  )
}

export default EditGroupName;