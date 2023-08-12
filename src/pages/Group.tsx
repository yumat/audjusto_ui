import React from 'react';
import { useParams } from "react-router-dom";
import { Grid } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import ButtonAppBar from "../components/ButtonAppBar";
import CopyButton from '../components/CopyButton';
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'
import MoveEditGroupNamePageButton from '../components/MoveEditGroupNamePageButton';
import MoveAddPayPageButton from '../components/MoveAddPayPageButton'
import MoveDetailGroupPageButton from '../components/MoveDetailGroupPageButton'
import MoveScheduleGroupPageButton from '../components/MoveScheduleGroupPageButton';
import MoveAddMemberPageButton from '../components/MoveAddVotePageButton';
import MembersChip from '../components/MembersChip';

import HistoryTable from '../components/HistoryTable'
import PaybackTable from '../components/PaybackTable'


const Group: React.FC = () => {
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap' }}>
          <h2 style={style}>{data.group_name}の割り勘グループ</h2><MoveEditGroupNamePageButton id={id} />
        </Grid>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap' }}>
          <CopyButton textToCopy={currentURL} />
          <MoveAddPayPageButton id={id} />
        </Grid>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
          <MembersChip functionTeam="money"/>
        </Grid>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap' }}>
          <h2>清算方法</h2><MoveDetailGroupPageButton id={id} />
        </Grid>
        <Grid container justifyContent="center" alignItems="flex-start">
          <PaybackTable id={id} />
        </Grid>

        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap' }}>
          <h2>支払い履歴</h2> <MoveAddPayPageButton id={id} />
        </Grid>
        <Grid container justifyContent="center" alignItems="flex-start">
          <HistoryTable id={id} />
          <MoveAddMemberPageButton />
          <MoveScheduleGroupPageButton />
        </Grid>

      </Box>
    </>
  )
}

export default Group;


