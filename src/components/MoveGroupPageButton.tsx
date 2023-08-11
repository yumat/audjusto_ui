import { useParams, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";


export default function MoveGroupPageButton() {
  const { id } = useParams();
  const groupUrl = "/group/" + id
  return (
    <Button
      sx={{ width: "100%", marginTop: 1 }}
      variant="contained"
      color="primary"
      component={Link}
      to={groupUrl}
    >
      割り勘グループに移動する
    </Button>
  );
}