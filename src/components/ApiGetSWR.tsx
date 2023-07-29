import useSWR from 'swr'
import { fetcher } from './Fetcher'


export const useSwr = (URL:string) => {
    const { data, error } = useSWR(URL, fetcher);
  
    if (error) {
      if (error.response?.status === 404) {
        return {
            data: null,
            isLoading: !error && !data,
            isError: error.response?.status
        }
      }
        return {
            data: null,
            isLoading: !error && !data,
            isError: error
        }
    }
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
  
  };

export default useSwr;