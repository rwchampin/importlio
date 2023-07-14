export default async function POST(req, res) {

    // Get the email from the request body
    const { email } = req.body;
    
    // Create a new registrant
    try {
       const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/registrants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })

        // Handle response
        if (res.status === 200) {
            // Do something
        }
    }
    catch (err) {
        // Handle error
    }
}