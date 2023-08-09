import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import { TransitionProps } from '@mui/material/transitions';

import DeletePayButton from "./DeletePayButton"
import ModifyPayForm from "./ModifyPayForm";



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(prop: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
      <IconButton onClick={handleClickOpen} edge="end">
        <EditIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              立て替え記録の修正
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="left" alignItems="center" style={{ flexWrap: 'wrap', marginLeft: '20px' }}>
          <h3></h3>
          {/* <ModifyPayForm membersData={prop.payData} /> */}
          {/* deletebuton */}
          {/* <h1>{prop.payData.date_time}</h1> */}
          <DeletePayButton payDate={prop.payData.date_time}/>
          <Button
            sx={{ width: '90%', marginTop: 1 }}
            variant="outlined"
            color="inherit"
            onClick={handleClose}
          >
            閉じる
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
}