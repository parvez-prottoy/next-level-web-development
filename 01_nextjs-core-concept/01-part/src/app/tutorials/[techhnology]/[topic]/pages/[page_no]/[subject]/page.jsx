import SectionHero from '@/components/section/SectionHero';

export default async function TutorialsSubject({ params }) {
  const { techhnology, topic, page_no, subject } = await params;
  return (
    <div>
      <SectionHero
        title="Tutorials Subject"
        description="Learn from our comprehensive tutorials and guides."
      >
        <h2 className="text-2xl font-bold text-blue-500">
          Path: {techhnology}/{topic}/{page_no}/{subject}
        </h2>
      </SectionHero>
    </div>
  );
}
