import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

// import Typography from '@mui/material/Typography';

import AddAttendanceForm from '../components/AddAttendanceForm';
import ButtonAppBar from "../components/ButtonAppBar";
import MoveBackPageButton from '../components/MoveBackPageButton';


const AddMember: React.FC = () => {
  const { id } = useParams();
  const scheduleUrl = "/schedule/" + id
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h2>出欠を入力する</h2>
        <AddAttendanceForm />
        <MoveBackPageButton />

      </Box>
    </>
  )
}

export default AddMember;



