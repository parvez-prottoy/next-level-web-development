import BackBtn from '@/components/buttons/BackBtn';
import { devStories } from '@/data/devStory';

export default async function StoryDetails({ params }) {
  const { id } = await params;
  console.log(id);
  const story = devStories.find((s) => s.id === Number(id));
  if (!story) {
    return (
      <>
        <BackBtn />
        <h1 className="text-3xl font-bold mb-6 p-6">Story not found!!!</h1>
      </>
    );
  }
  const {
    name,
    description,
    story: storyText,
    skills,
    about,
    experiences,
  } = story;
  return (
    <div>
      <BackBtn />
      <div className="p-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          {/* <Image src={image} alt={name} width={300} height={200} /> */}
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <h3 className="text-lg font-semibold mb-2">Story:</h3>
          <p className="text-gray-700 mb-2">{storyText}</p>
          <h3 className="text-lg font-semibold mb-2">About:</h3>
          <p className="text-gray-700 mb-2">{about}</p>
          <h3 className="text-lg font-semibold mb-2">Experience:</h3>
          <div className="">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4 bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Role:</span> {exp?.role}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Company:</span> {exp?.company}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Duration:</span> {exp?.duration}
                </p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
