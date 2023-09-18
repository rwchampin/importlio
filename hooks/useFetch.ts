import { NextResponse } from "next/server";
const post_headers = {
    'Content-Type': 'application/json',
}

const get_headers = {
    'Accept': 'application/json',
}
export default async function useFetch({ 
    endpoint = '',
    method = 'GET',
    body = {},
    headers:object = {},
    onSuccess = (data: any) => { },
    onError = (error: any) => { },
    onFinally = () => { },
    
}:any) {

    // const [loading, setLoading] = useState(false);
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
// 
    const controller = new AbortController();
    const { signal } = controller;
    const headers = method === 'POST' ? post_headers : get_headers;
    let options:any = {
        signal,
        method,
        headers,
    }
   options['body'] = method === 'POST' ? options = { ...options, body: JSON.stringify(body) } : null;
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_HOST}/api${endpoint}`, 
                ...options
            );

            if (response.ok) {
                const data = await response.json();
                return data;
                // setData(data);
                // onSuccess(data);
            } else {
                // createError(response);
            throw new Error('Error fetching data');

            }

        } catch (error) {
            // createError(error);
            throw new Error('Error fetching data');
        }
        
        // setLoading(false);
        // onFinally();

}

