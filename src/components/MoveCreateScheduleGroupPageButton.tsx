import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Height } from "@mui/icons-material";

export default function MoveCreateScheduleGroupPageButton() {
  return (
      <Button
            sx={{ width: "48%", padding: 1, margin: "1%", height: 60}}
            variant="contained"
            color="success"
            component={Link}
            to="/new_schedule"
          >
            日程調整から始める
      </Button>
  );
}