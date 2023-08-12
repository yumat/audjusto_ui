import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import useSwr from '../components/ApiGetSWR';
import requests from '../utils/Requests';
import Post from '../components/ApiPostLink'

const AddMemberForm: React.FC = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useSwr(requests.fetchScheduleData + '/' + id);
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

    const handleDateSelection = (date: string, date_id: string, result: string) => {
        const updatedDates = selectedDates.filter((selectedDate) => selectedDate.date !== date);
        setSelectedDates([...updatedDates, { date, date_id, result }]);
    };

    const isInputValid = name.length >= 1 && name.length <= 16;


    const handleSubmit = () => {
        const payload = {
            name,
            dates: selectedDates,
        };
        postApi(payload)
    };

    const postApi = (data: any) => {
        return Post(requests.InsertAttendanceData + "/" + id, data, "/group/", id)
    };

    if (isLoading) {
        return (
            <>
                <div>Loading</div>
            </>
        );
    }
    if (isError) {
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
            <Button
                sx={{ width: '100%', marginTop: 1 }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!isInputValid}
            >
                追加
            </Button>
        </>
    );
};

export default AddMemberForm;
