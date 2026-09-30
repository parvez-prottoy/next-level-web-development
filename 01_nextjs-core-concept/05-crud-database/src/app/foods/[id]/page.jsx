import AddToCartBtn from '@/components/foods/AddToCartBtn';

const getFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};
export default async function FoodDetails({ params }) {
  const { id } = await params;
  const food = await getFood(id);
  if (!food) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Food not found ❌
      </div>
    );
  }

  const { title, foodImg, price, video, category, area } = food;
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Food Image */}
      <img
        src={foodImg}
        alt={title}
        className="w-full h-72 object-cover rounded-xl shadow"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-5">{title}</h1>

      {/* Category + Area */}
      <div className="flex gap-4 mt-2 text-gray-600">
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{category}</p>
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{area}</p>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold mt-4">{price}৳</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href={video}
          target="_blank"
          className="flex-1 bg-red-600 text-white py-3 rounded-lg text-center hover:bg-red-700"
        >
          Watch Video
        </a>
        <AddToCartBtn food={food} />
      </div>
    </div>
  );
}
