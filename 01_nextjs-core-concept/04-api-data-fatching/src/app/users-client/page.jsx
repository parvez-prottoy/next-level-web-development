'use client';
import { useEffect, useState } from 'react';

export default function UsersClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred!!!');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading)
    return <h1 className="text-3xl text-center pt-6">Loading User Data...</h1>;
  if (error)
    return <h1 className="text-3xl text-center pt-6 text-red-400">{error}</h1>;
  return (
    <div>
      <h1 className="text-3xl text-center pt-6">
        This is the User Client Page. <br />
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
