import React from 'react';
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Button, Chip } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import '../components/calendar-override.css'

import MoveBackPageButton from '../components/MoveBackPageButton';
import useSwr from '../components/ApiGetSWR'
import Post from './ApiPostLink'
import requests from '../utils/Requests';

const AddScheduleForm: React.FC = () => {
    const { id } = useParams();
    const { data: scheduleData, isLoading: isScheduleDataLoading, isError: isScheduleDataError } = useSwr(requests.fetchScheduleData + "/" + id)
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

    const onSubmit = () => {
        const payload = selectedDates.map(date => ({ date: formatDateForPayload(date) }));
        postApi(payload)
    };

    const postApi = (data: any) => {
        return Post(requests.InsertAddScheduleData + "/" + id , data, "/schedule/", id)
    };

    const formatDateForGetDataDisplay = (dateString: string) => {
        const year = dateString.substr(0, 4);
        const month = dateString.substr(4, 2);
        const day = dateString.substr(6, 2);
        return `${month}/${day}`;
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

    const isDateSelected = (date: Date) => {
        const formattedDate = formatDateForPayload(date);
        return scheduleData.some((item: any) => item.date === formattedDate);
    };

    const handleChipDelete = (chipIndex: number) => {
        setSelectedDates(prevDates => prevDates.filter((_, index) => index !== chipIndex));
    };
    if (isScheduleDataLoading) return <div>Loading</div>
    if (isScheduleDataError) return <div>Error</div>
    return (
        <div>
            追加済みの候補日
            <div>
                {scheduleData.map((item: any) => (
                    <Chip
                        key={item.date}
                        label={formatDateForGetDataDisplay(item.date)}
                        sx={{
                            margin: '0.2rem',
                        }}
                    />
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                    tileDisabled={({ date }) => isDateSelected(date)} // Disable selection for existing dates
                    value={null}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: '100%', marginTop: 1 }}
                >
                    候補日の追加
                </Button>
                <MoveBackPageButton />
            </form>
        </div>
    );
};

export default AddScheduleForm;
