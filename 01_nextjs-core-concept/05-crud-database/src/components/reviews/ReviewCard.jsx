'use client';

import { useState } from 'react';

export default function ReviewCard({ review }) {
  const { user, email, photo, rating, review: text, likes, date } = review;
  const [likesCount, setLikesCount] = useState(likes.length);
  const [isLike, setIsLike] = useState(false);
  const handleLikes = () => {
    setIsLike(!isLike);
    setLikesCount((prev) => (isLike ? prev - 1 : prev + 1));
  };
  return (
    <div className="border rounded-xl p-5 shadow-md bg-white hover:shadow-lg transition">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div>
          <h3 className="font-semibold text-lg text-gray-600">{user}</h3>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3 text-yellow-500">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i}>★</span>
          ))}
        {Array(5 - rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-gray-300">
              ★
            </span>
          ))}
      </div>

      {/* Review Text */}
      <p className="mt-3 text-gray-700 leading-relaxed">{text}</p>

      {/* Date */}
      <p className="text-gray-400 text-sm mt-3">
        {/* {new Date(date).toLocaleDateString('en-US')} */}
      </p>

      {/* Like Button */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={handleLikes}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition text-black ${
            isLike
              ? 'bg-blue-600  border-blue-600'
              : 'bg-gray-30 hover:bg-gray-100 border-gray-300'
          }`}
        >
          {isLike ? 'Liked ❤️' : 'Like 🤍'}
        </button>

        <span className="text-sm text-gray-600">{likesCount} likes</span>
      </div>
    </div>
  );
}
