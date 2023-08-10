import React from 'react';
import { useParams, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { Button, Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import ButtonAppBar from "../components/ButtonAppBar";
import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'


const Detail: React.FC = () => {
  let style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 3,
  };
  const { id } = useParams();
  const groupUrl = "/group/" + id

  const { data: membersData, isLoading: isMembersDataLoading, isError: isMembersDataError } = useSwr(requests.fetchMembersData + "/" + id)
  if (isMembersDataLoading)
    return (
      <>
        <ButtonAppBar />
        <div>Loading</div>
      </>
    )
  if (isMembersDataError)
    return (
      <>
        <ButtonAppBar />
        <div>Error</div>
      </>
    )
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 3 }} alignItems="flex-start">
      <Toolbar />
      <h2 style={style}>明細詳細</h2>
        <Grid container justifyContent="center" alignItems="flex-start">
          <Paper sx={{ width: '100%' }}>
            <TableContainer component={Paper}>
              <Table sx={{ width: '100%' }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">名前</TableCell>
                    <TableCell align="right">立替<br />金額</TableCell>
                    <TableCell align="right">支出</TableCell>
                    <TableCell align="right">貸し借り<br />金額</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {membersData.map((row: any, index: any) => (
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
          <Button
            sx={{ width: '100%', marginTop: 1 }}
            variant="outlined"
            color="inherit"
            component={Link}
            to={groupUrl}
          >
            戻る
          </Button>
        </Grid>
      </Box>
    </>
  )
}

export default Detail;



