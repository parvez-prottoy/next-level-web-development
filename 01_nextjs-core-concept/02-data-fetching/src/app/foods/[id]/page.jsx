import Image from 'next/image';

export default async function FoodDetails({ params }) {
  const { id } = await params;
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const { details } = await res.json();
  return (
    <>
      <div className="bg-blue-500 py-20 text-center">
        <h1 className="text-4xl">This is food details page.</h1>
      </div>
      <div className="card shadow-sm bg-gray-600">
        <figure>
          <Image
            className="w-full h-auto"
            src={details.foodImg}
            alt={details.title}
            width={300}
            height={200}
            loading="eager"
          />
        </figure>
        <div className="card-body text-left">
          <span>{details.category}</span>
          <h2 className="card-title">{details.title}</h2>
          <p>
            This is a delicious {details.category} dish that will tantalize your
            taste buds. Enjoy the perfect blend of flavors and textures in every
            bite.
          </p>
          <h2 className="card-title">${details.price}</h2>
        </div>
      </div>
    </>
  );
}
