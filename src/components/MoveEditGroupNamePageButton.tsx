import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


export default function MoveEditGroupNamePageButton(prop: any) {
  const editGroupNameUrl = "/edit_groupname/" + prop.id
  return (
      <IconButton
        edge="end"
        sx={{margin:0, padding: 0}}
        component={Link}
        to={editGroupNameUrl}
      >
        <EditIcon />
      </IconButton>
  );
}