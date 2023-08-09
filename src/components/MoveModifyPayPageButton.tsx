import { useParams, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Chip from '@mui/material/Chip';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


export default function MoveDetailGroupPageButton(prop: any) {
  const { id } = useParams();
  const modifyPayUrl = "/modify_pay/" + id + "/" + prop.payData
  return (
    <IconButton
      sx={{ width: '100%', marginTop: 1 }}
      color="inherit"
      component={Link}
      to={modifyPayUrl}
      edge="end"
    >
      <EditIcon />
    </IconButton>
  );
}