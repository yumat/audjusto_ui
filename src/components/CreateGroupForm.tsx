import { useForm, useFieldArray } from "react-hook-form";
import { TextField, Button, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Post from './ApiPostLink'
import requests from '../utils/Requests';

type FormValues = {
    group_name: string
    members: {
        name: string;
    }[];
};


export default function CreateGroupForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            group_name: '',
            members: [{ name: "" }, { name: "" }],
        },
        mode: "onBlur",
    });
    const { fields, append, remove } = useFieldArray({
        name: "members",
        control,
    });
    const onSubmit = (data: FormValues) => {
        postApi(data)
    }
    const postApi = (group_name: any) => {
        return Post(requests.InsertGroupData, group_name)
    };

    return (
        <Grid container alignItems='center' justifyContent='center' direction="column">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="outlined-string"
                    label="グループ名"
                    type="string"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: 300, padding: 1, margin: 2 }}
                    {...register('group_name', {
                        required: '1文字以上にしてください。',
                    })}

                />
                <p>{errors.group_name?.message}</p>
                {fields.map((field, index) => {
                    return (
                        <div key={field.id} >
                            <section className={"section"} key={field.id}>
                                <TextField
                                    id="outlined-string"
                                    label="名前"
                                    type="string"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{ width: 300, padding: 1, margin: 2 }}
                                    {...register(`members.${index}.name` as const, {
                                        required: '1文字以上にしてください。',
                                    })}
                                    InputProps={{
                                        endAdornment: index > 1 ? (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => remove(index)} edge="end">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ) : null,
                                    }}
                                />
                            </section>
                        </div>
                    );
                })}

                <Button
                    sx={{ width: 300, padding: 2, margin: 2 }}
                    variant="contained"
                    color="primary"
                    onClick={() =>
                        append({
                            name: "",
                        })
                    }
                >
                    追加
                </Button>
                <Button
                    sx={{ width: 300, padding: 2, margin: 2 }}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                >
                    作成
                </Button>
            </form>
        </Grid>
    );
}
