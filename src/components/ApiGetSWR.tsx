import useSWR from 'swr'
import { fetcher } from './Fetcher'


export const useSwr = (URL:string) => {
    const {data, error} = useSWR(URL, fetcher);
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useSwr;