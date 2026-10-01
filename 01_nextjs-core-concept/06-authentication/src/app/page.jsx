import { Button } from '@heroui/react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-3xl font-bold">Welcome to Authentication</h1>
      <Link href="/tasks">
        <Button size="lg">View Tasks</Button>
      </Link>
    </div>
  );
}
