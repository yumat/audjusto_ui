import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ListIcon from '@mui/icons-material/List';


export default function MoveDetailGroupPageButton(prop: any) {
  const groupUrl = "/group_detail/" + prop.id
  return (
    <Button
      sx={{ width: '55%', margin: 1 }}
      variant="outlined"
      color="primary"
      component={Link}
      to={groupUrl}
      startIcon={<ListIcon />}
    >
      明細詳細
    </Button>
  );
}