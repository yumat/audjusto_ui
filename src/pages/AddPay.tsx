import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useParams, Link } from "react-router-dom";
// import Typography from '@mui/material/Typography';

import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'
import ButtonAppBar from "../components/ButtonAppBar";
import MoveBackPageButton from '../components/MoveBackPageButton';
import AddPayForm from "../components/AddPayForm";



const AddPay: React.FC = () => {
  let styleh1 = {
    fontSize: 24
  };
  const { id } = useParams();
  const { data: membersData, isLoading: isMembersDataLoading, isError: isMembersDataError } = useSwr(requests.fetchMembersData + "/" + id)

  if (isMembersDataLoading)
    return (
      <>
        <ButtonAppBar />
        <div>Loading</div>
      </>
    )
  if (isMembersDataError)
    return (
      <>
        <ButtonAppBar />
        <div>Error</div>
      </>
    )
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1 style={styleh1}>立て替え記録の追加</h1>
          <AddPayForm membersData={membersData} />
          <MoveBackPageButton />
      </Box>
    </>
  )
}

export default AddPay;



