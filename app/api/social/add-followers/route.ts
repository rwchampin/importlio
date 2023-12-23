// next js route handler
import { NextRequest, NextResponse } from 'next/server';

async function saveAccount(username: string, password: string, platform: string) {
    const saveRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/social/account/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            platform: platform,
        }),
    });

    const saveData = await saveRes.json();

    return saveData;
}

async function addFollowers(username: string, platform: string, email: string, password: string) {
     
    const body = {
        email: email,
        username: username,
        password: password,
        platform: platform,
    }
    // call api to get data
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/social/add-followers/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    // get data
    const data = await res.json();

    return data
}

export async function POST(request: NextRequest, response: NextResponse) {
    // get post data
    const postData = await request.json();
    const { email,username, password, platform } = postData;

    
    const saveData = await saveAccount(username, password, platform);
    const addFollowersData = await addFollowers(username, platform, email, password);

    const [
        save,
        followers,
    ] = await Promise.all([saveData, addFollowersData]);

   
    // return data
    return NextResponse.json({ save, followers });
}