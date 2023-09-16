import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';


export default function MoveAttendancePageButton(prop: any) {
  const groupUrl = "/add_vote/" + prop.id
  return (
    <Button
      sx={{ width: '55%', margin: 1 }}
      variant="outlined"
      color="primary"
      component={Link}
      to={groupUrl}
      startIcon={<EventNoteSharpIcon />}
    >
      出欠追加
    </Button>
  );
}