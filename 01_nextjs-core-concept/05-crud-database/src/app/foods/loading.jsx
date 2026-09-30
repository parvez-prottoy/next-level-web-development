import FoodSkeleton from '@/components/foods/FoodSkeleton';

export default function Loading() {
  return (
    <div className="grid my-5 grid-cols-1 gap-5">
      {[...Array(12)].map((_, index) => (
        <FoodSkeleton key={index} />
      ))}
    </div>
  );
}
