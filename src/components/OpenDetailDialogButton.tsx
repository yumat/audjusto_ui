import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import ListIcon from '@mui/icons-material/List';
import { TransitionProps } from '@mui/material/transitions';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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
      <Chip icon={<ListIcon />} label="明細詳細" onClick={handleClickOpen} />
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
              立て替え記録
            </Typography>
          </Toolbar>
        </AppBar>
        <h3>記録</h3>
        <Paper >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">名前</TableCell>
                  <TableCell align="right">立替<br/>金額</TableCell>
                  <TableCell align="right">支出</TableCell>
                  <TableCell align="right">貸し借り<br/>金額</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prop.membersData.map((row: any, index:any) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="right">¥{(Math.ceil(row.pay)).toLocaleString()}</TableCell>
                    <TableCell align="right">¥{(Math.ceil(row.paid)).toLocaleString()}</TableCell>
                    <TableCell align="right" style={{ color: (Math.ceil(row.pay) - Math.ceil(row.paid)) < 0 ? 'red' : 'inherit' }}>
                    ¥{(Math.ceil(row.pay) - Math.ceil(row.paid)).toLocaleString()}
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Dialog>
    </div>
  );
}