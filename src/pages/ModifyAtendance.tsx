import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

import MoveBackPageButton from '../components/MoveBackPageButton';
import ModifyAttendantForm from '../components/ModifyAttendanceForm';
import DeleteAttendanceButton from '../components/DeleteAttendanceButton';
import ButtonAppBar from "../components/ButtonAppBar";


const ModifyAttendance: React.FC = () => {
  let styleonlysize = {
    fontSize: 24
  };
  const { id } = useParams();
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1 style={styleonlysize}>修正する</h1>
        <ModifyAttendantForm team="schedule"/>
        <DeleteAttendanceButton />
        <MoveBackPageButton />

      </Box>
    </>
  )
}

export default ModifyAttendance;



