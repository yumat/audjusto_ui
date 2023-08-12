import { useParams, Link } from "react-router-dom";
import { Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


import requests from '../utils/Requests';
import useSwr from '../components/ApiGetSWR'


export default function MembersChip(prop: any) {
    const style = {
        // backgroundColor: "gray",
        // color: "#FFF",
        margin: 0,
        padding: 3
    };
    const { id } = useParams();

    const { data: membersData, isLoading: isMembersDataLoading, isError: isMembersDataError } = useSwr(requests.fetchMembersData + "/" + id)

    const getChipToValue = (member: any) => {
        if (prop.functionTeam === 'schedule') {
            return `/modify_attendance/${member.group_id}/${member.member_id}`;
        } else if (prop.functionTeam === 'money') {
            return `/modify_member/${member.group_id}/${member.member_id}`;
        }
        // デフォルトの値やエラーハンドリングをここに追加することもできます
        return '';
    };

    if (isMembersDataLoading)
        return (
            <>
                <div>Loading</div>
            </>
        )
    if (isMembersDataError)
        return (
            <>
                <div>Error</div>
            </>
        )
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                メンバー:{membersData.map((member: any) => (
                    <Chip
                        key={member.member_id}
                        label={member.name}
                        color="primary"
                        size='small'
                        style={{ margin: '0.2rem' }}
                        icon={<EditIcon />}
                        component={Link}
                        to={getChipToValue(member)}
                    />
                ))}
            </div>
        </>


    );
}
