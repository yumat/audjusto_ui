import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'

const YourComponent: React.FC = () => {
    const { register, handleSubmit, setValue, getValues } = useForm();

    const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);

    const onSubmit = () => {
        const payload = {
            group_name: getValues('group_name'),
            schedule: selectedDates.map(date => ({ date: formatDate(date) }))
        };

        // Now you can send the payload to your API using POST method
        // For example using fetch or Axios

        console.log(payload); // Just for testing purposes
    };

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month is zero-based
        const day = date.getDate();
        return `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
    };

    const handleDateChange = (date: Date) => {
        setSelectedDates(prevDates => [...prevDates, date]);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Group Name"
                {...register('group_name', { required: true })}
                fullWidth
                margin="normal"
            />

            {/* Display selected dates */}
            <div>
                Selected Dates:
                {selectedDates.map((date, index) => (
                    <span key={index}>{formatDate(date)}, </span>
                ))}
            </div>

            {/* Render the calendar */}
            <Calendar onChange={handleDateChange} value={null} />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default YourComponent;
