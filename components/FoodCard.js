'use client';

import Image from 'next/image';

export default function FoodCard({ name, price, description, imageUrl, rating }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || '/default-food.jpg'}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <span className="text-purple-600 font-bold">{price}원</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center">
          {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
          <span className="ml-2 text-sm text-gray-500">{rating}/5</span>
        </div>
      </div>
    </div>
  );
} 