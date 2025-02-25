"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { calculateResult } from '@/utils/calculateResult';

export default function ResultPage({ answers }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const products = await response.json();
        const getRecommendations = calculateResult(answers);
        const recommendedProducts = getRecommendations(products);
        setRecommendations(recommendedProducts);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [answers]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center">
        <div className="text-2xl text-[#6366F1] font-bold mb-4">결과를 분석중...</div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FF] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#6366F1] mb-12">
          당신을 위한 추천 메뉴
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((product, index) => (
            <div key={index} className="bg-white rounded-[28px] p-6 flex flex-col items-center">
              <div className="w-full aspect-square relative mb-6 flex items-center justify-center">
                <Image
                  src={product.이미지URL}
                  alt={product.상품명}
                  width={200}
                  height={200}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                {product.상품명}
              </h3>
              <p className="text-[#6366F1] text-2xl font-bold">
                {product.가격}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 