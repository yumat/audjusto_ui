import { useParams, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from "@mui/material";

import Delete from './ApiDeleteBase'
import useSwr from '../components/ApiGetSWR'
import requests from '../utils/Requests';


export default function DeleteAttendanceButton() {
  const { id, member_id } = useParams();
  const navigate = useNavigate();
  const {
    data: memberData,
    isLoading: isMemberDataLoading,
    isError: isMemberDataError
  } = useSwr(requests.fetchMemberData + "/" + id + "/" + member_id)

  const DeleteApi = (body: any) => {
    Delete(requests.DeleteAttendanceData + '/' + id, body)
    navigate(-1)
    return 
  };

  if (isMemberDataLoading)
    return (
      <>
        <div>Loading</div>
      </>
    )
  if (isMemberDataError)
    return (
      <>
        <div>Error</div>
      </>
    )

  const isButtonDisabled = memberData.paid !== "0" || memberData.pay !== "0";
  const disabledReason = isButtonDisabled
    ? memberData.paid !== "0"
      ? "立替え記録が存在するため、メンバー削除できません。"
      : "立替え記録に存在するため、メンバー削除できません。"
    : "";

  return (
    <div>
      <Button
        sx={{ width: "100%", marginTop: 1 }}
        variant="contained"
        color="error"
        onClick={() => DeleteApi({member_id: member_id })}
        disabled={isButtonDisabled}
      >
        削除する
      </Button>
      {isButtonDisabled && (
        <Typography variant="body2" color="error" align="center">
          {disabledReason}
        </Typography>
      )}
    </div>
  );
}