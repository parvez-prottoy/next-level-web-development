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
              <h2>{user.name}</h2>
              <h2>Username: {user.username}</h2>
              <h2>Email: {user.email}</h2>

              <h3>Address</h3>
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode: {user.address.zipcode}</p>

              <h3>Location</h3>
              <p>Latitude: {user.address.geo.lat}</p>
              <p>Longitude: {user.address.geo.lng}</p>

              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>

              <h3>Company</h3>
              <p>Company Name: {user.company.name}</p>
              <p>Catch Phrase: {user.company.catchPhrase}</p>
              <p>Business: {user.company.bs}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
