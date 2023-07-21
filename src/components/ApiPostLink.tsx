import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


export const Post = (URL:string, BODY:any) => {
    axios.post(URL, BODY).then(res => {        
        // console.log(res.data.group_id);
        window.location.href = '/group/' + res.data.group_id; 
    })
}
export default Post;