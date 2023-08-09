import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox, TextField, Button } from '@mui/material';


import Post from './ApiPostHomeLink'
import requests from '../utils/Requests';

type FormInput = {
    payer: string;
    payer_id: string;
    members: {
        name: string;
        member_id: string;
    }[];
    event: string;
    amount: number;
};

export default function AddPayForm(prop: any) {
    const { id } = useParams();
    const { register, handleSubmit, getValues, setValue } = useForm<FormInput>();

    const onSubmit = (data: FormInput) => {
        const selectedPayer = prop.membersData.find((member: any) => member.name === data.payer);

        if (!selectedPayer) {
            return; // Handle error condition
        }
        const payload = {
            payer: selectedPayer.name,
            payer_id: selectedPayer.member_id,
            event: data.event,
            amount: data.amount,
            members: prop.membersData
                .filter((member: any, index: number) => getValues(`members.${index}.name`))
                .map((member: any, index: number) => ({
                    name: member.name,
                    member_id: member.member_id,
                    // selected: getValues(`members.${index}.name`) === true
                }))
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
                <Select {...register('payer')} sx={{ width: '90%' }}>
                    {prop.membersData.map((member: any) => (
                        <MenuItem key={member.member_id} value={member.name}>
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
                                    defaultChecked={member.name}
                                    {...register(`members.${index}.name` as const)}
                                />
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <TextField label="何に" {...register('event')} sx={{ width: '90%', marginTop: 1 }} />
            <TextField label="いくら払った" type="number" {...register('amount')} sx={{ width: '90%', marginTop: 1 }} />
            <Button
                sx={{ width: '90%', marginTop: 1 }}
                variant="outlined"
                type="submit"
            >
                追加
            </Button>
        </form>
    );
};
