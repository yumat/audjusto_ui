import axios from 'axios';


export const Delete = (URL:string, BODY:any, id: any, afterURL:string) => {
    axios.delete(URL, {data:BODY}).then(res => {
        window.location.href = afterURL + id; 

    })
}
export default Delete;

