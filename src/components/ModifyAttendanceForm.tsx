import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

import useSwr from '../components/ApiGetSWR';
import requests from '../utils/Requests';
import Post from '../components/ApiPostLink'

const ModifyAttendantForm: React.FC = () => {
    const { id, member_id } = useParams();
    const { data, isLoading, isError } = useSwr(requests.fetchScheduleData + '/' + id);
    const { data: scheduleData, isLoading: isScheduleDataLoading, isError: isScheduleDataError } = useSwr(requests.fetchAttendanceData + '/' + id + '/' + member_id);

    const formatDate = (dateString: string) => {
        const year = parseInt(dateString.slice(0, 4));
        const month = parseInt(dateString.slice(4, 6)) - 1; // 0-indexed months
        const day = parseInt(dateString.slice(6, 8));
        
        const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
        const date = new Date(year, month, day);
        const dayOfWeek = daysOfWeek[date.getDay()]; // 0 (日曜) から 6 (土曜) までの数値
        
        return `${month + 1}/${day} (${dayOfWeek})`;
      }

    const [name, setName] = useState('');
    const [selectedDates, setSelectedDates] = useState<{ date: string; date_id: string; result: string }[]>([]);

    useEffect(() => {
        if (scheduleData) {
            setName(scheduleData.name);
            setSelectedDates(scheduleData.dates);
        }
    }, [scheduleData]);

    const handleDateSelection = (date: string, date_id: string, result: string) => {
        const updatedDates = selectedDates.filter((selectedDate) => selectedDate.date !== date);
        setSelectedDates([...updatedDates, { date, date_id, result }]);
    };

    const isInputValid = name.length >= 1 && name.length <= 16 && selectedDates.length >= data.length;

    const handleSubmit = () => {
        const payload = {
            name,
            member_id,
            dates: selectedDates,
        };
        postApi(payload)
    };

    const postApi = (data: any) => {
        return Post(requests.InsertAttendanceData + "/" + id, data, "/schedule/", id)
    };

    if (isLoading || isScheduleDataLoading) {
    // if (isLoading) {
        return (
            <>
                <div>Loading</div>
            </>
        );
    }
    if (isError || isScheduleDataError) {
    // if (isError) {
        return (
            <>
                <div>Error</div>
            </>
        );
    }

    return (
        <>
            <TextField
                label="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                error={name.length < 1 || name.length > 16}
                helperText={(name.length > 0 && name.length < 1) ? '名前は1文字以上で入力してください。' : (name.length > 16) ? '名前は16文字以下で入力してください。' : ''}
            />
            <Paper sx={{ width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ width: '100%' }} size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">候補日</TableCell>
                                <TableCell align="left">可能</TableCell>
                                <TableCell align="left">微妙</TableCell>
                                <TableCell align="left">不可</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((date: { date: string; date_id: string }) => (
                                <TableRow key={date.date_id}>
                                    <TableCell align="left">
                                        <p>{formatDate(date.date)}</p>
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            color={selectedDates.some((selectedDate) => selectedDate.date === date.date && selectedDate.result === 'available') ? 'primary' : 'default'}
                                            onClick={() => handleDateSelection(date.date, date.date_id, 'available')}
                                        >
                                            <CheckBoxIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            color={selectedDates.some((selectedDate) => selectedDate.date === date.date && selectedDate.result === 'maybe') ? 'primary' : 'default'}
                                            onClick={() => handleDateSelection(date.date, date.date_id, 'maybe')}
                                        >
                                            <IndeterminateCheckBoxIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            color={selectedDates.some((selectedDate) => selectedDate.date === date.date && selectedDate.result === 'unavailable') ? 'primary' : 'default'}
                                            onClick={() => handleDateSelection(date.date, date.date_id, 'unavailable')}
                                        >
                                            <CheckBoxOutlineBlankIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Button
                sx={{ width: '100%', marginTop: 1 }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!isInputValid}
            >
                入力
            </Button>
        </>
    );
};

export default ModifyAttendantForm;
