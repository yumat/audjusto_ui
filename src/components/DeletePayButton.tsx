import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

import Delete from './ApiDelete'
import requests from '../utils/Requests';


export default function MoveCreateGroupPageButton(prop: any) {
  const { id } = useParams();
  const DeleteApi = (body: any) => {
    return Delete(requests.DeletePayHistory + '/' + id, body, id)
  };

  return (
    
    <Button
      sx={{ width: '90%', marginTop: 1 }}
      variant="outlined"
      color="error"
      onClick={() => DeleteApi({date_time: prop.payDate})}
    >
      削除
    </Button>
  );
}