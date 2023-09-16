import React from 'react';
import { useParams } from "react-router-dom";
import { Grid } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import ButtonAppBar from "../components/ButtonAppBar";
import CopyButton from '../components/CopyButton';
import MoveEditGroupNamePageButton from '../components/MoveEditGroupNamePageButton';
import MoveAttendancePageButton from '../components/MoveAttendancePageButton';
import MoveAddSchedulePageButton from '../components/MoveAddSchedulePageButton';
import MoveGroupPageButton from '../components/MoveGroupPageButton';
import ScheduleTable from '../components/ScheduleTable';
import MembersChip from '../components/MembersChip';
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'



const ScheduleGroup: React.FC = () => {
  let style = {
    fontSize: 24
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
          <h1 style={style}>{data.group_name}の日程調整</h1><MoveEditGroupNamePageButton id={id} />
        </Grid>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
          <CopyButton textToCopy={currentURL} />
          <MoveAttendancePageButton id={id} />
        </Grid>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
          <h1 style={style}>候補日</h1>
        </Grid>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
          <MembersChip functionTeam="schedule"/>
        </Grid>
        <Grid container justifyContent="center" alignItems="flex-start">
          <p style={{ textAlign: 'right', width: '100%', margin: 0, fontSize: 10 }}><b>行をクリックすると出欠の詳細を確認できます。</b></p>
          <ScheduleTable id={id} />
        </Grid>
        <Grid container justifyContent="center" alignItems="flex-start">
          <MoveAddSchedulePageButton />
          <MoveGroupPageButton />
        </Grid>
      </Box>
    </>
  )
}

export default ScheduleGroup;