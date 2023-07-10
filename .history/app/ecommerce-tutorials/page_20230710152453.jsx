import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export default async function Page() {


    debugger
    try{
    const res = await fetch('http://localhost:8000/api/posts/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "email": "strumfast@gmail.com",
                "password": "Imagine1234"
            }
        ),
    })
    const data = await res.json();
    debugger
    console.log(data)
    }catch(e){
        console.log(e)
        debugger
    }
    return <BlogList />
}