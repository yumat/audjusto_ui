import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button } from '@mui/material';


import Post from './ApiPostHomeLink'
import requests from '../utils/Requests';

type FormInput = {
    payer: string;
    members: {
        name: string;
    }[];
    event: string;
    amount: number;
};

export default function AddPayForm(prop: any) {
    const { id } = useParams();
    const { register, handleSubmit, getValues, setValue } = useForm<FormInput>();

    const onSubmit = (data: FormInput) => {
        const payload = {
            payer: data.payer,
            event: data.event,
            amount: data.amount,
            members: prop.membersData
                .filter((member: any, index: number) => getValues(`members.${index}.name`))
                .map((member: any) => ({ name: member.name }))
        };
        postApi(payload)
    }
    const postApi = (data: any) => {
        return Post(requests.InsertPayHistory + "/" + id, data, id)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
                <InputLabel>支払った人(誰が)</InputLabel>
                <Select {...register('payer')}>
                    {prop.membersData.map((member: any) => (
                        <MenuItem key={member.name} value={member.name}>
                            {member.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <h4>誰に</h4>

            <FormControl fullWidth>
                <FormGroup
                    style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
                >
                    {prop.membersData.map((member: any, index: number) => (
                        <FormControlLabel
                            key={member.name}
                            label={member.name}
                            control={
                                <Checkbox
                                    value={member.name}
                                    checked={true}
                                    {...register(`members.${index}.name` as const)}
                                />
                            }
                            style={{ marginRight: 16 }} // Add some spacing between checkboxes
                        />
                    ))}
                </FormGroup>
            </FormControl>




            <TextField label="何に" {...register('event')} fullWidth />
            <TextField label="いくら払った" type="number" {...register('amount')} fullWidth />

            <Button type="submit">追加</Button>
        </form>
    );
};
