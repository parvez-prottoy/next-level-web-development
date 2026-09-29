'use client';
import { useEffect } from 'react';

export default function Error({ error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div>
      <h1 className="text-3xl text-center pt-6 text-red-400">{error}</h1>
    </div>
  );
}
