import SectionHero from '@/components/section/SectionHero';
import StoryCard from '@/components/storyPage/StoryCard';
import { devStories } from '@/data/devStory';

export default function StoriesPage() {
  return (
    <div>
      <SectionHero
        title="Stories"
        description="Read inspiring stories from developers around the world."
      ></SectionHero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {devStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
