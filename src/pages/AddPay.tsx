import React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { useParams, Link } from "react-router-dom";
// import Typography from '@mui/material/Typography';

import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'
import ButtonAppBar from "../components/ButtonAppBar";
import AddPayForm from "../components/AddPayForm";



const AddPay: React.FC = () => {

  const { id } = useParams();
  const groupUrl = "/group/" + id
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
        <h2>立て替え記録の追加</h2>
        <Grid container justifyContent="center" alignItems="center" style={{ flexWrap: 'wrap' }}>
          <AddPayForm membersData={membersData} />
          <Button
            sx={{ width: '100%', marginTop: 1 }}
            variant="outlined"
            color="inherit"
            component={Link}
            to={groupUrl}
          >
            戻る
          </Button>
        </Grid>
      </Box>
    </>
  )
}

export default AddPay;



