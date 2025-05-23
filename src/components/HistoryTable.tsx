import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'
import DeletePayButton from '../components/DeletePayButton'


export default function HistoryTable(prop: any) {
    const { data, isLoading, isError } = useSwr(requests.fetchPaysData + "/" + prop.id)
    if(isLoading) return <div>Loading</div>
    if(isError) return <div>Error</div>
    return (
      <Paper sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">誰が</TableCell>
              <TableCell align="right">何に</TableCell>
              <TableCell align="right">払った</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any, index: any) => (
              <TableRow key={index}>
                <TableCell align="left">{row.payer}</TableCell>
                <TableCell align="right">{row.event}</TableCell>
                <TableCell align="right">¥{(Math.ceil(row.amount)).toLocaleString()}</TableCell>
                <TableCell align="right"><DeletePayButton payDate={row.date_time}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>    
    );
  }



