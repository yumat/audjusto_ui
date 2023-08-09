import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Chip from '@mui/material/Chip';
import ListIcon from '@mui/icons-material/List';


export default function MoveDetailGroupPageButton(prop: any) {
  const groupUrl = "/group_detail/" + prop.id
  return (
    <Chip
      icon={<ListIcon />}
      sx={{ minWidth: '30%', margin: 1 }}
      label="明細詳細"
      component={Link}
      to={groupUrl}
    />
  );
}