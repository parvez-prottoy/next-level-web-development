import SectionHero from '@/components/section/SectionHero';

export default async function DynamicDocsPage({ params }) {
  const { slug } = await params;
  console.log(slug);
  return (
    <SectionHero
      title="Documentation"
      description="Explore our detailed documentation to understand how to use our platform effectively."
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Dynamic Documentation Page
      </h2>
      <p className="mt-4 text-blue-600">{slug.join('/')}</p>
    </SectionHero>
  );
}
