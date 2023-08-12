import { useParams, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";


export default function MoveAddVotePageButton() {
  const { id } = useParams();
  const addMemberUrl = "/add_member/" + id
  return (
    <Button
      sx={{ width: "100%", marginTop: 1 }}
      variant="contained"
      color="primary"
      component={Link}
      to={addMemberUrl}
    >
      メンバーを追加する
    </Button>
  );
}