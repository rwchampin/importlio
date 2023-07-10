import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export default async function Page() {



    const res = await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Credentials': 'include'
        },
    })
    const data = await res.json();
    debugger
    return <BlogList />
}