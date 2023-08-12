import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

// import Typography from '@mui/material/Typography';

import AddAttendanceForm from '../components/AddAttendanceForm';
import ButtonAppBar from "../components/ButtonAppBar";
import MoveBackPageButton from '../components/MoveBackPageButton';


const AddVote: React.FC = () => {
  let style = {
    margin: 0,
    padding: 3,
    fontSize: 24
  };
  const { id } = useParams();
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1 style={style}>出欠を登録する</h1>
        <AddAttendanceForm />
        <MoveBackPageButton />

      </Box>
    </>
  )
}

export default AddVote;



