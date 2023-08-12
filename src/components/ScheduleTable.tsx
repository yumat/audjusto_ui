import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'
import { Padding } from '@mui/icons-material';


export default function ScheduleTable(prop: any) {
  const style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 3,
  };
  const { data, isLoading, isError } = useSwr(requests.fetchScheduleData + "/" + prop.id)
  const formatDate = (dateString: string) => {
    const year = parseInt(dateString.slice(0, 4));
    const month = parseInt(dateString.slice(4, 6)) - 1; // 0-indexed months
    const day = parseInt(dateString.slice(6, 8));

    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    const date = new Date(year, month, day);
    const dayOfWeek = daysOfWeek[date.getDay()]; // 0 (日曜) から 6 (土曜) までの数値

    return `${month + 1}/${day} (${dayOfWeek})`;
  }

  const [selectedRowData, setSelectedRowData] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (rowData: any) => {
    setSelectedRowData(rowData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  const availableLengths = data.map((row: any) => row.available.length);
  const maxAvailableLength = Math.max(...availableLengths);

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ padding: 0 }}>候補日</TableCell>
              <TableCell align="center" sx={{ padding: 0 }}>
                <BottomNavigation showLabels>
                  <BottomNavigationAction
                    label="可能"
                    icon={<SentimentVerySatisfiedIcon />}
                    disabled={true}
                    
                  />
                </BottomNavigation>
              </TableCell>
              <TableCell align="center" sx={{ padding: 0 }}>
                <BottomNavigation showLabels>
                  <BottomNavigationAction
                    label="微妙"
                    icon={<SentimentDissatisfiedIcon />}
                    disabled={true}
                  />
                </BottomNavigation>
              </TableCell>
              <TableCell align="center" sx={{ padding: 0 }}>
                <BottomNavigation showLabels>
                  <BottomNavigationAction
                    label="不可"
                    icon={<SentimentVeryDissatisfiedIcon />}
                    disabled={true}
                  />
                </BottomNavigation>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index: any) => (
              <TableRow
                key={index}
                onClick={() => handleClickOpen(row)}
                style={{
                  backgroundColor: row.available.length === maxAvailableLength ? 'lightblue' : 'white',
                  cursor: 'pointer',
                }}
              >
                <TableCell align="left" >{formatDate(row.date)}</TableCell>
                <TableCell align="center">{row.available.length}</TableCell>
                <TableCell align="center">{row.maybe.length}</TableCell>
                <TableCell align="center">{row.unavailable.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>参加者詳細</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            {/* ここにデータの詳細を表示 */}
            {selectedRowData && (
              <div>
                <h3>{formatDate(selectedRowData.date)}の参加者詳細</h3>
                <h6 style={style}>名前をクリックすると出欠を修正できます。</h6>
                <Grid container justifyContent="left" alignItems="flex-start">
                  <BottomNavigation showLabels >
                    <BottomNavigationAction
                      label="可能"
                      icon={<SentimentVerySatisfiedIcon />}
                      disabled={true}
                    />
                  </BottomNavigation>
                    :{selectedRowData.available.map((item: any, index: number) => (
                      <Chip
                        key={index}
                        label={item.name}
                        color="primary"
                        size='small'
                        style={{ marginRight: '4px' }}
                        icon={<EditIcon />}
                        component={Link}
                        to={`/modify_attendance/${prop.id}/${item.member_id}`}
                      />
                    ))}
                </Grid>
                <Grid container justifyContent="left" alignItems="flex-start">
                  <BottomNavigation showLabels>
                    <BottomNavigationAction
                      label="微妙"
                      icon={<SentimentDissatisfiedIcon />}
                      disabled={true}
                    />
                  </BottomNavigation>
                    :{selectedRowData.maybe.map((item: any, index: number) => (
                      <Chip
                        key={index}
                        label={item.name}
                        color="default"
                        size='small'
                        style={{ marginRight: '4px' }}
                        icon={<EditIcon />}
                        component={Link}
                        to={`/modify_attendance/${prop.id}/${item.member_id}`}
                      />
                    ))}
                </Grid>

                <Grid container justifyContent="left" alignItems="flex-start">
                  <BottomNavigation showLabels>
                    <BottomNavigationAction
                      label="不可"
                      icon={<SentimentVeryDissatisfiedIcon />}
                      disabled={true}
                    />
                  </BottomNavigation>
                    :{selectedRowData.unavailable.map((item: any, index: number) => (
                      <Chip
                        key={index}
                        label={item.name}
                        color="error"
                        size='small'
                        style={{ marginRight: '4px' }}
                        icon={<EditIcon />}
                        component={Link}
                        to={`/modify_attendance/${prop.id}/${item.member_id}`}
                      />
                    ))}
                </Grid>

              </div>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
