export default async function TutorialsSubject({ params }) {
  const result = await params;
  console.log(result);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 p-6">Tutorials Subject</h1>
    </div>
  );
}
