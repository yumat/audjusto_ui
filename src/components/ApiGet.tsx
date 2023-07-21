import axios from 'axios';

export const Get = (URL:string) => {
    axios.get(URL).then(res => {        
        return {res}     
     })    
}
export default Get;