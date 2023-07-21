import React from 'react';
import { useParams } from "react-router-dom";

import ButtonAppBar from "../components/ButtonAppBar";
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'

const Group: React.FC = () => {
  const {id} = useParams();
  const { data, isLoading, isError } = useSwr(requests.fetchGroupData + "/" + id)
    if(isLoading) return <div>Loading</div>
    if(isError) return <div>Error</div>
  return (
    <>
      <ButtonAppBar />
      {/* <h6>{id}</h6> */}
      <h6>{data.group_name}</h6>        
    </>

  )
}

export default Group;


