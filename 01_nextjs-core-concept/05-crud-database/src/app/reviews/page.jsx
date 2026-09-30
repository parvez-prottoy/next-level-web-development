import ReviewCard from '@/components/reviews/ReviewCard';

const getReviews = async () => {
  const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews');
  const data = await res.json();
  return data.reviews || [];
};
export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{reviews.length} </span> Reviews
        Found
      </h2>
      <div className="grid my-5 grid-cols-2 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
