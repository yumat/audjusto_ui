import { useParams, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";


export default function MoveScheduleGroupPageButton() {
  const { id } = useParams();
  const groupUrl = "/schedule/" + id
  return (
    <Button
      sx={{ width: "100%", marginTop: 1 }}
      variant="contained"
      color="success"
      component={Link}
      to={groupUrl}
    >
      日程調整に移動する
    </Button>
  );
}