import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function MoveCreateGroupPageButton() {
  return (
      <Button
            sx={{ width: "48%", padding: 1, margin: "1%", height: 60 }}
            variant="contained"
            color="primary"
            component={Link}
            to="/new_group"
          >
            割り勘グループを作成する
      </Button> 
  );
}