

export default async function UserAccountWidget() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
  const { results } = await res.json();
  debugger

  return (
    <section className="flex flex-col gap-4 bg-red-200 p-5 h-5">
      {results && results.map((user: any) => (
        <div key={user.id}>
          <h1>{user.first_name} {user.last_name}</h1>
          <p>{user.email}</p>
          <p>{user.is_active}</p>
        </div>
      ))}
    </section>
  )
}
