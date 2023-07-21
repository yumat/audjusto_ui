import axios from 'axios';

export const Post = (URL:string, BODY:any) => {
    axios.post(URL, BODY).then(res => {        
        // console.log(res.data);
        return res.data
    })
}
export default Post;