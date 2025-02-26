'use client';

import Link from 'next/link';

export default function ChallengeCard({ title, difficulty, timeLimit, reward, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          difficulty === '쉬움' ? 'bg-green-100 text-green-800' :
          difficulty === '보통' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {difficulty}
        </span>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">⏰ 제한시간: {timeLimit}</p>
        <p className="text-gray-600">🏆 보상: {reward}</p>
      </div>
      <Link 
        href={link}
        className="inline-block w-full text-center bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
      >
        도전하기
      </Link>
    </div>
  );
} 