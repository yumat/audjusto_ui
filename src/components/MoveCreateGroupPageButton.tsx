import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

export default function MoveCreateGroupPageButton() {
  return (
    <Grid container alignItems='center' justifyContent='center' direction="column">
      <Button
            sx={{ width: 300, padding: 2, margin: 0 }}
            variant="contained"
            color="primary"
            component={Link}
            to="/new_group"
          >
            はじめる
      </Button>
    </Grid>    
  );
}