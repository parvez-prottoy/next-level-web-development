'use client';
import SectionHero from '@/components/section/SectionHero';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    const password = prompt('Enter the password to share your story:');
    if (password === '1234') {
      router.push('/dashboard');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };
  return (
    <div className="p-12 bg-blue-50 text-center">
      <SectionHero
        title="Welcome to Dev Story"
        description="Share your coding journey with the world."
      >
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Share your story
        </button>
      </SectionHero>
    </div>
  );
}
