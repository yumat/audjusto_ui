import axios from 'axios';


export const Delete = (URL:string, BODY:any, id: any) => {
    axios.delete(URL, {data:BODY}).then(res => {
        window.location.href = '/group/' + id; 

    })
}
export default Delete;

