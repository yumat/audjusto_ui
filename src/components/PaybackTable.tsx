import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'



export default function HistoryTable(prop: any) {
    const { data, isLoading, isError } = useSwr(requests.fetchPaybackData + "/" + prop.id)
    if(isLoading) return <div>Loading</div>
    if(isError) return <div>Error</div>
    return (
      <Paper >      
        <TableContainer sx={{ minWidth: 350 }} component={Paper}>
        <Table sx={{ minWidth: 100 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">誰が</TableCell>
              <TableCell align="right">誰に</TableCell>
              <TableCell align="right">いくら払う</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any, index: any) => (
              <TableRow key={index}>
                <TableCell align="left">{row.sender} →</TableCell>
                <TableCell align="right">{row.receiver}</TableCell>
                <TableCell align="right">¥{(Math.ceil(row.amount)).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>    
    );
  }



