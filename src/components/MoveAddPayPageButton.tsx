import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Chip from '@mui/material/Chip';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


export default function MoveDetailGroupPageButton(prop: any) {
  const addPayUrl = "/add_pay/" + prop.id
  return (
    <Chip
      icon={<PlaylistAddIcon />}
      sx={{ minWidth: '30%', margin: 1 }}
      label="立て替え記録の追加"
      component={Link}
      to={addPayUrl}
    />
  );
}