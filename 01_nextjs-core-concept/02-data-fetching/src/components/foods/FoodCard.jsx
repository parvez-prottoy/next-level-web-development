import Image from 'next/image';

export default function FoodCard({ food }) {
  const { title, catId, foodImg, price, category } = food || {};
  return (
    <div className="card shadow-sm">
      <figure>
        <Image
          className="w-full h-auto"
          src={foodImg}
          alt={title}
          width={300}
          height={200}
          loading="eager"
        />
      </figure>
      <div className="card-body text-left">
        <span>{category}</span>
        <h2 className="card-title">{title}</h2>
        <p>
          This is a delicious {category} dish that will tantalize your taste
          buds. Enjoy the perfect blend of flavors and textures in every bite.
        </p>
        <h2 className="card-title">${price}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
