export default function SectionHero({ children, title, description }) {
  return (
    <div className="p-12 bg-blue-50 text-center">
      <h1 className="text-3xl font-bold mb-6 text-black">{title}</h1>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      {children}
    </div>
  );
}
