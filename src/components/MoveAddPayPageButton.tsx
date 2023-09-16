import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


export default function MoveDetailGroupPageButton(prop: any) {
  const addPayUrl = "/add_pay/" + prop.id
  return (
    <Button
      sx={{ width: '55%', margin: 1 }}
      variant="outlined"
      color="primary"
      component={Link}
      to={addPayUrl}
      startIcon={<PlaylistAddIcon />}
    >
      立て替え記録の追加
    </Button>
  );
}