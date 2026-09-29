export default async function Author({ userId }) {
  await new Promise((resolve) => setTimeout(resolve));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users//${userId}`
  );
  const user = await res.json();
  return (
    <div>
      <h2 className="font-bold mt-4">
        Written by: <span>{user.username}</span>
      </h2>
    </div>
  );
}
