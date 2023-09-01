export default async function useEmptyPost() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/create/`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           
        }),
    });
    const emptyPost = await res.json();

    return emptyPost;
}