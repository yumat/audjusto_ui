import axios from 'axios';


export const Post = (URL:string, BODY:any, AfterURL :string) => {
    axios.post(URL, BODY).then(res => {        
        // console.log(res.data.group_id);
        window.location.href = AfterURL + res.data.group_id; 
    })
}
export default Post;