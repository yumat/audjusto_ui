import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import Delete from './ApiDelete'
import requests from '../utils/Requests';


export default function DeletePayButton(prop: any) {
  const { id } = useParams();
  const DeleteApi = (body: any) => {
    return Delete(requests.DeletePayHistory + '/' + id, body, id)
  };

  return (
    <IconButton onClick={() => DeleteApi({date_time: prop.payDate})} edge="end">
        <DeleteIcon />
    </IconButton>

  );
}