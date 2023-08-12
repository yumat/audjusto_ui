import { useParams, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";


export default function MoveAddSchedulePageButton() {
  const { id } = useParams();
  const addScheduleUrl = "/add_schedule/" + id
  return (
    <Button
      sx={{ width: "100%", marginTop: 1 }}
      variant="contained"
      color="primary"
      component={Link}
      to={addScheduleUrl}
    >
      候補日を追加する
    </Button>
  );
}