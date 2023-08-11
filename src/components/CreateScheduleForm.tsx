import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Chip } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import '../components/calendar-override.css'

import Post from './ApiPostNewId'
import requests from '../utils/Requests';

const CreateScheduleForm: React.FC = () => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

    const onSubmit = () => {
        const payload = {
            group_name: getValues('group_name'),
            schedule: selectedDates.map(date => ({ date: formatDateForPayload(date) }))
        };

        console.log(payload);
        postApi(payload)
    };

    const postApi = (data: any) => {
        return Post(requests.InsertScheduleData, data, "/schedule/")
    };


    const formatDateForDisplay = (date: Date) => {
        const month = date.getMonth() + 1; // Month is zero-based
        const day = date.getDate();
        return `${month}/${day}`;
    };

    const formatDateForPayload = (date: Date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}${month}${day}`;
    };


    const handleDateChange = (date: Date) => {
        if (!selectedDates.some(selectedDate => selectedDate.getTime() === date.getTime())) {
            setSelectedDates(prevDates => [...prevDates, date]);
        }
    };

    const handleChipDelete = (chipIndex: number) => {
        setSelectedDates(prevDates => prevDates.filter((_, index) => index !== chipIndex));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="グループ名"
                {...register('group_name', { required: true })}
                sx={{ width: '100%' }}
                margin="normal"
            />

            {/* Display selected dates as chips */}
            選択中の日付
            <div>

                {selectedDates.map((date, index) => (
                    <Chip
                        key={index}
                        label={formatDateForDisplay(date)}
                        onDelete={() => handleChipDelete(index)}
                        sx={{ margin: '0.2rem' }}
                        color='primary'
                    />
                ))}
            </div>

            {/* Render the calendar */}
            <Calendar
                onClickDay={handleDateChange}
                value={null}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: '100%', marginTop: 1 }}
            >
                日程調整グループの作成
            </Button>
        </form>
    );
};

export default CreateScheduleForm;
