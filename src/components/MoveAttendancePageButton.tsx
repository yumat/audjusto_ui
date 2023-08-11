import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';


export default function MoveAttendancePageButton(prop: any) {
  const groupUrl = "/add_member/" + prop.id
  return (
    <Chip
      icon={<EventNoteSharpIcon />}
      sx={{ minWidth: '30%', margin: 1 }}
      label="出欠入力"
      component={Link}
      to={groupUrl}
    />
  );
}