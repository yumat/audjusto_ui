import { useForm, useFieldArray } from "react-hook-form";
import { TextField, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupsIcon from '@mui/icons-material/Groups';

import Post from './ApiPostNewId'
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
        return Post(requests.InsertGroupData, group_name, "/group/")
    };

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
                                sx={{ width: '100%', marginTop: 1 }}
                                {...register(`members.${index}.name` as const, {
                                    required: '1文字以上にしてください。',
                                    maxLength: {
                                        value: 16,
                                        message: '16文字以内で入力してください',
                                    },
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

<Grid container justifyContent="center" alignItems="center" style={{ flexWrap: 'wrap' }}>
                <Chip
                    icon={<PersonAddAlt1Icon sx={{ color: 'blue !important' }} />}
                    sx={{
                        minWidth: '30%',
                        padding: 1,
                        margin: 3,
                        backgroundColor: 'lightblue',
                        overflow: 'visible',
                    }}
                    label="追加"
                    onClick={() => append({ name: "" })}
                />
                <Chip
                    icon={<GroupsIcon sx={{ color: 'blue !important' }} />} 
                    sx={{
                        minWidth: '30%',
                        padding: 1,
                        margin: 1,
                        backgroundColor: 'lightblue',
                        overflow: 'visible',
                    }}
                    label="作成"
                    onClick={handleSubmit(onSubmit)}
                />
            </Grid>
        </form>
    );
}