import axios from 'axios';

export const Post = (URL:string, BODY:any) => {
    axios.post(URL, BODY).then(res => {        
        return 
    })
}
export default Post;