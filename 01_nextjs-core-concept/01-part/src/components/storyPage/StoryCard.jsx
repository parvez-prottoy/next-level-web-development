import Link from 'next/link';

export default function StoryCard({ story }) {
  const { name, description, image } = story;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <Image src={image} alt={name} width={300} height={200} /> */}
      <h2 className="text-xl font-bold mb-2 text-gray-700">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={`/stories/${story.id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        Read More
      </Link>
    </div>
  );
}
