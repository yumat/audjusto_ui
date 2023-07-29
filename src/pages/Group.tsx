import React from 'react';
import { useParams } from "react-router-dom";

import ButtonAppBar from "../components/ButtonAppBar";
import CopyButton from '../components/CopyButton';
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'

const Group: React.FC = () => {
  const {id} = useParams();
  const currentURL = window.location.href;
  const { data, isLoading, isError } = useSwr(requests.fetchGroupData + "/" + id)
    if(isLoading) 
      return (
        <>
          <ButtonAppBar />
          <div>Loading</div>
        </>
      )
    if(isError == 404)
      window.location.href = '/not_found'
    if(isError)
      return (
        <>
          <ButtonAppBar />
          <div>Error</div>
        </>
      )
      return (
        <>
          <ButtonAppBar />
          <h6>{data.group_name}</h6>
          <CopyButton textToCopy={currentURL} />
        </>
      )
}

export default Group;


