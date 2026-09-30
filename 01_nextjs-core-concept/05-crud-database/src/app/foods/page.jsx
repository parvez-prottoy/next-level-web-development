import FoodCard from '@/components/foods/FoodCard';
import FoodCarts from '@/components/foods/FoodCarts';

const getFoods = async () => {
  const res = await fetch(
    'https://taxi-kitchen-api.vercel.app/api/v1/foods/random'
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};
export default async function FoodsPage() {
  const foods = await getFoods();
  return (
    <div>
      <h2 className={`text-4xl font-bold`}>
        Total <span className="text-yellow-500">{foods.length} </span> Foods
        Found
      </h2>
      <div className="my-4">{/* <InputSearch></InputSearch> */}</div>

      <div className="flex gap-5">
        <div className=" flex-1 grid my-5 grid-cols-1 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <FoodCarts />
      </div>
    </div>
  );
}
