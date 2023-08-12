import { Link } from "react-router-dom";
import { Button } from "@mui/material";


export default function MoveTopPageButton() {
  return (
    <Button
      sx={{ width: "100%", marginTop: 1 }}
      variant="contained"
      color="primary"
      component={Link}
      to="/"
    >
      トップページに戻る
    </Button>
  );
}