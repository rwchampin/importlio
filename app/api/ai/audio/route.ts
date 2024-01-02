// next js route handler
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // get form data from request
    const formData:any = await request.formData();

    // create a new FormData object to store the file
    const bodyFormData = new FormData();
    bodyFormData.append('audio', formData.get('audio'));

    // call API to get data
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/ai-audio/`, {
      method: 'POST',
      body: bodyFormData,
    });

    if (res.status === 200) {
        
      const { transcript } = await res.json();
      return NextResponse.json({ transcript });
    } else {
      console.error('Failed to fetch data from API');
      return NextResponse.json({ transcript: '' });
    }
  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json({ transcript: '' });
  }
}
