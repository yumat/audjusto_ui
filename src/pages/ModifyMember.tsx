import React from 'react';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

import MoveBackPageButton from '../components/MoveBackPageButton';
import ModifyAttendantForm from '../components/ModifyAttendanceForm';
import DeleteAttendanceButton from '../components/DeleteAttendanceButton';
import ButtonAppBar from "../components/ButtonAppBar";


const ModifyMember: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h2>名前を修正する</h2>
        <ModifyAttendantForm team="money"/>
        <DeleteAttendanceButton />
        <MoveBackPageButton />

      </Box>
    </>
  )
}

export default ModifyMember;



