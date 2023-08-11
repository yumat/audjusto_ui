import React from 'react';
import { useParams } from "react-router-dom";
import { Grid } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import ButtonAppBar from "../components/ButtonAppBar";
import CopyButton from '../components/CopyButton';
import MoveEditGroupNamePageButton from '../components/MoveEditGroupNamePageButton';
import MoveAttendancePageButton from '../components/MoveAttendancePageButton';
import MoveGroupPageButton from '../components/MoveGroupPageButton';
import ScheduleTable from '../components/ScheduleTable';
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'



const ScheduleGroup: React.FC = () => {
  let style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 3,
  };
  const { id } = useParams();
  const currentURL = window.location.href;
  const { data, isLoading, isError } = useSwr(requests.fetchGroupData + "/" + id)

  if (isLoading)
    return (
      <>
        <ButtonAppBar />
        <div>Loading</div>
      </>
    )
  if (isError == 404)
    window.location.href = '/not_found'
  if (isError)
    return (
      <>
        <ButtonAppBar />
        <div>Error</div>
      </>
    )
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }} alignItems="flex-start">
      <Toolbar />
      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
        <h2 style={style}>{data.group_name}</h2><MoveEditGroupNamePageButton id={id}/>
      </Grid>
      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
        <CopyButton textToCopy={currentURL} />
      </Grid>
      <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
        <h2>候補日</h2>
        <MoveAttendancePageButton id={id} />
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-start">
        <h6 style={{ textAlign: 'right', width: '100%', margin: 0 }}>行をクリックすると出欠の詳細を確認できます。</h6>
        <ScheduleTable id={id} />
      </Grid>
      <Grid container justifyContent="center" alignItems="flex-start">
        <MoveGroupPageButton />
      </Grid>
      </Box>
    </>
  )
}

export default ScheduleGroup;