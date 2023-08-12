import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';


export default function MoveAttendancePageButton(prop: any) {
  const groupUrl = "/add_vote/" + prop.id
  return (
    <Chip
      icon={<EventNoteSharpIcon />}
      sx={{ minWidth: '30%', margin: 1 }}
      label="出欠追加"
      component={Link}
      to={groupUrl}
    />
  );
}