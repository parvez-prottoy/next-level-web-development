import FoodCard from '@/components/foods/FoodCard';
import { getFoods } from '@/lib/fetchData';

export default async function FoodsPage() {
  const foods = await getFoods();
  return (
    <>
      <div className="hero bg-base-100 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Foods</h1>
            <p className="py-6">
              Discover a world of delicious flavors and culinary delights.
              Explore our curated selection of foods and reviews to satisfy your
              taste buds.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <h2 className="text-blue-500 text-4xl font-bold">{`Total ${foods.length} foods are available`}</h2>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 text-black container mx-auto">
          {!foods ? (
            <div className="flex flex-col items-center justify-center col-span-full">
              <h2 className="text-2xl font-bold">No foods found</h2>
              <p className="text-gray-500">Please try again later.</p>
            </div>
          ) : (
            foods.map((food) => <FoodCard key={food.id} food={food} />)
          )}
        </div>
      </div>
    </>
  );
}
