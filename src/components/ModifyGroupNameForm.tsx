import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from '@mui/material'
import { useParams, useNavigate } from "react-router-dom";

import useSwr from '../components/ApiGetSWR';
import Post from './ApiPost'
import requests from '../utils/Requests';

type FormValues = {
    group_name: string
    group_id: string
};

export default function ModifyGroupNameForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useSwr(requests.fetchGroupData + '/' + id);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>();

    useEffect(() => {
        if (data) {
            setValue('group_name', data.group_name);
            setValue('group_id', data.group_id);
        }
    }, [data, setValue]);

    const onSubmit = (data: FormValues) => {
        postApi(data)
    }

    const postApi = (payload: any) => {
        Post(requests.InsertGroupNameData, payload)
        navigate(-1)
        return 
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id="outlined-string"
                label="グループ名"
                type="string"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{ width: '100%' }}
                {...register('group_name', {
                    required: '1文字以上にしてください。',
                    maxLength: {
                        value: 16,
                        message: '16文字以内で入力してください',
                    },
                })}
            />
            <p>{errors.group_name?.message}</p>
            <Button
                sx={{ width: '100%', marginTop: 1 }}
                variant="outlined"
                type="submit"
            >
                修正する
            </Button>
        </form>
    );
}
