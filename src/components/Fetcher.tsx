// export const fetcher = (url: string) => fetch(url).then(res => res.json())
import axios from 'axios';

export const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };