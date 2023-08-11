export default async function Page({ data, type }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${type}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json().results

    return 

}