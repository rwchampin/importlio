import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export default  function Page() {


    debugger
    try{
    const res =fetch('http://localhost:8000/api/posts/', {
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
    }).then(res => res.json()).then(data => {
        debugger
        console.log(data)
    })
    
    debugger
    console.log(data)
    }catch(e){
        console.log(e)
        debugger
    }
    return <BlogList />
}