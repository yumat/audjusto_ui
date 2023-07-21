import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField, Button, Grid } from '@mui/material'

import Post from './ApiPostLink'
import requests from '../utils/Requests';

interface FormInput {
    group_name: string
}


export default function CreateGroupButton(prop: any) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = (data) => {
        postApi(data)
    }
    const postApi = (group_name:any) => {
        return Post(requests.InsertGroupData, group_name)        
    };
    return (       
        <Grid container alignItems='center' justifyContent='center' direction="column">
            <TextField
                    id="outlined-string"
                    label="グループ名"
                    type="string"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: 300, padding: 1, margin: 1 }}
                    {...register('group_name', {
                        required: '1文字以上にしてください。',
                    })}
                    
            />
            <p>{errors.group_name?.message}</p>
            <Button
                sx={{ width: 300, padding: 2, margin: 2 }}
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
            >
                作成
            </Button>
        </Grid>



    );
}