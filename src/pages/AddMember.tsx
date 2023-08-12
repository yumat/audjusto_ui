import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

// import Typography from '@mui/material/Typography';

import AddMemberForm from '../components/AddMemberForm';
import ButtonAppBar from "../components/ButtonAppBar";
import MoveBackPageButton from '../components/MoveBackPageButton';


const AddMember: React.FC = () => {
  let styleh1 = {
    margin: 0,
    padding: 0,
    fontSize: 24
  };
  const { id } = useParams();
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1 style={styleh1}>メンバーを追加する</h1>
        <AddMemberForm />
        <MoveBackPageButton />
      </Box>
    </>
  )
}

export default AddMember;



