import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import MoveBackPageButton from '../components/MoveBackPageButton';
import ModifyAttendantForm from '../components/ModifyAttendanceForm';
import DeleteAttendanceButton from '../components/DeleteAttendanceButton';
import ButtonAppBar from "../components/ButtonAppBar";


const ModifyMember: React.FC = () => {
  let styleonlysize = {
    fontSize: 24
  };
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
          <h1 style={styleonlysize}>名前を修正する</h1>
        <ModifyAttendantForm team="money"/>
        <DeleteAttendanceButton />
        <MoveBackPageButton />

      </Box>
    </>
  )
}

export default ModifyMember;



