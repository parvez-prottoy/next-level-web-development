export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return (
    <div>
      <h1 className="text-3xl text-center pt-6">
        This is the User Server Page. <br />
        Total Users {users.length}
      </h1>
      <div className="pt-6 px-20 grid gap-6">
        {users.map((user) => {
          return (
            <div key={user.id} className="bg-white text-xl text-black p-4">
              <h2 className="text-2xl">{user.name}</h2>
              <h2>Username: {user.username}</h2>
              <h2>Email: {user.email}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
