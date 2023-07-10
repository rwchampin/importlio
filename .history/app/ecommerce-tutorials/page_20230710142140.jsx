import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export default async function Page() {



    const res = await fetch('http://localhost:3000/api/posts/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Credentials': 'include'
        },
    })
    const data = await res.json();
    debugger
    return <BlogList />
}