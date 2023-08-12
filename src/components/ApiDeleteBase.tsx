import axios from 'axios';


export const Delete = (URL:string, BODY:any) => {
    axios.delete(URL, {data:BODY}).then(res => {
        return

    })
}
export default Delete;

