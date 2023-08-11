import React from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';


import ModifyAttendantForm from '../components/ModifyAttendanceForm';
import DeleteAttendanceButton from '../components/DeleteAttendanceButton';
import ButtonAppBar from "../components/ButtonAppBar";


const ModifyAttendance: React.FC = () => {
  const { id } = useParams();
  const scheduleUrl = "/schedule/" + id
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h2>出欠を修正する</h2>
        <ModifyAttendantForm />
        <DeleteAttendanceButton />
        <Button
          sx={{ width: '100%', marginTop: 1 }}
          variant="outlined"
          color="inherit"
          component={Link}
          to={scheduleUrl}
        >
          戻る
        </Button>

      </Box>
    </>
  )
}

export default ModifyAttendance;



