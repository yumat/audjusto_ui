import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function MoveBackPageButton() {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ width: '100%', marginTop: 1 }}
      variant="outlined"
      color="inherit"
      onClick={() => navigate(-1)}
    >
      戻る
    </Button>
  );
}