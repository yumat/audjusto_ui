import React from 'react';
import { useParams } from "react-router-dom";
import { Grid } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
// import Box from '@mui/material/Box';

import ButtonAppBar from "../components/ButtonAppBar";
import CopyButton from '../components/CopyButton';
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'
import OpenReimbursementDialogButton from '../components/OpenReimbursementDialogButton'
import OpenDetailDialogButton from '../components/OpenDetailDialogButton'
import HistoryTable from '../components/HistoryTable'
import PaybackTable from '../components/PaybackTable'


const Group: React.FC = () => {
  const { id } = useParams();
  const currentURL = window.location.href;
  const { data, isLoading, isError } = useSwr(requests.fetchGroupData + "/" + id)
  const { data: membersData, isLoading: isMembersDataLoading, isError: isMembersDataError } = useSwr(requests.fetchMembersData + "/" + id)

  if (isLoading || isMembersDataLoading)
    return (
      <>
        <ButtonAppBar />
        <div>Loading</div>
      </>
    )
  if (isError == 404)
    window.location.href = '/not_found'
  if (isError || isMembersDataError)
    return (
      <>
        <ButtonAppBar />
        <div>Error</div>
      </>
    )
  return (
    <>
      <ButtonAppBar />
      {/* <Box component="main" sx={{ p: 3 }}> */}
      <Toolbar />

      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '20px' }}>
        <h2>{data.group_name}</h2>
      </Grid>
      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '20px' }}>
        <CopyButton textToCopy={currentURL} />
        <OpenReimbursementDialogButton membersData={membersData} />
      </Grid>
      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '20px' }}>
        <h2>清算方法</h2><OpenDetailDialogButton membersData={membersData} />
      </Grid>
      <PaybackTable id={id} />
      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '20px' }}>
        <h2>支払い履歴</h2> <OpenReimbursementDialogButton membersData={membersData} />
      </Grid>
      <HistoryTable id={id} />
      {/* </Box> */}
    </>
  )
}

export default Group;


