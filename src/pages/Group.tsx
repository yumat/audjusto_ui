import React from 'react';
import { useParams } from "react-router-dom";
import { Grid } from '@mui/material'

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

      <Grid container alignItems='center' justifyContent='center' direction="column">
        <h2>{data.group_name}</h2>
        <CopyButton textToCopy={currentURL} />
        <OpenReimbursementDialogButton membersData={membersData} />
        <OpenDetailDialogButton membersData={membersData} />
        <h2>清算方法</h2>
        <PaybackTable id={id} />
        <h2>支払い履歴</h2>
        <HistoryTable id={id} />
      </Grid>


    </>
  )
}

export default Group;


