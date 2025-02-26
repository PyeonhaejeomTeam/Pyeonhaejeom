import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import mbtiTypes from "@/assets/data/mbtiTypesData";
import mbtiFoodRecommendations from "@/assets/data/mbtiFoodRecommendations";
import ShareButtons from "@/components/ShareButtons";
import {
  getFoodRecommendationsForMBTI,
  parseCuData,
} from "@/utils/foodRecommendationUtils";

export default function MBTIResultContent({ result }) {
  const [cuProducts, setCuProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCuData() {
      try {
        console.log("데이터 로딩 시작...");
        const response = await fetch("/cuData.csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        const data = parseCuData(csvText);
        console.log("받은 데이터:", data);

        const recommendations = await getFoodRecommendationsForMBTI(
          result.type,
          data
        );
        console.log("추천 결과:", recommendations);
        setCuProducts(recommendations);
        setError(null);
      } catch (error) {
        console.error("상품 데이터를 불러오는데 실패했습니다:", error);
        setError(
          "상품 데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요."
        );
      } finally {
        setLoading(false);
      }
    }

    if (result?.type) {
      loadCuData();
    }
  }, [result?.type]);

  if (!result || !result.type || !mbtiTypes[result.type]) {
    return (
      <div className="text-center">
        <p className="text-xl text-red-500">결과를 불러올 수 없습니다.</p>
        <Link href="/test" className="button mt-4">
          다시 테스트하기
        </Link>
      </div>
    );
  }

  const mbtiType = mbtiTypes[result.type];
  const foodRecommendations = mbtiFoodRecommendations[result.type];

  return (
    <div className="max-w-3xl mx-auto">
      {/* MBTI 유형 */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          당신의 MBTI 유형은
        </h2>
        <h1 className="text-4xl font-bold text-center text-[#6366F1] mb-4">
          {result.type}
        </h1>
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          {mbtiType.type}
        </h3>

        {/* 성격 설명 */}
        <div className="mb-8">
          <p className="text-lg text-center text-gray-600">
            {mbtiType.description}
          </p>
        </div>

        {/* 성향 분석 그래프 */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-6">성향 분석</h4>
          <div className="space-y-6">
            {Object.entries(result.percentages).map(([key, value]) => (
              <div key={key} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{key.charAt(0)}</span>
                  <span className="font-medium">{key.charAt(1)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#6366F1] h-3 rounded-full transition-all duration-500"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
                <span className="absolute right-0 -bottom-6 text-sm text-gray-600">
                  {value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 특성 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 강점 */}
        <div className="bg-white rounded-[28px] p-8 shadow-lg">
          <h4 className="text-xl font-semibold mb-4">강점</h4>
          <ul className="space-y-3">
            {mbtiType.strengths.map((strength, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* 약점 */}
        <div className="bg-white rounded-[28px] p-8 shadow-lg">
          <h4 className="text-xl font-semibold mb-4">약점</h4>
          <ul className="space-y-3">
            {mbtiType.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 추천 직업 */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg mb-8">
        <h4 className="text-xl font-semibold mb-6">추천 직업</h4>
        <div className="flex flex-wrap gap-3">
          {mbtiType.careers.map((career, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#F8F9FF] text-[#6366F1] rounded-full font-medium"
            >
              {career}
            </span>
          ))}
        </div>
      </div>

      {/* 음식 추천 섹션 */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg mb-8">
        <h4 className="text-2xl font-semibold mb-6">
          당신의 MBTI 유형에 맞는 음식 추천
        </h4>

        {/* 설명 */}
        <p className="text-lg text-gray-700 mb-6">
          {foodRecommendations.description}
        </p>

        {/* 선호 성향 */}
        <div className="mb-8">
          <h5 className="text-xl font-semibold mb-4">당신의 음식 선호 성향</h5>
          <div className="flex flex-wrap gap-3">
            {foodRecommendations.preferences.map((preference, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#F8F9FF] text-[#6366F1] rounded-full font-medium"
              >
                {preference}
              </span>
            ))}
          </div>
        </div>

        {/* CU 추천 상품 */}
        <div className="mt-8">
          <h5 className="text-xl font-semibold mb-6">추천 CU 상품</h5>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1] mx-auto"></div>
              <p className="text-gray-600 mt-4">추천 상품을 불러오는 중...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
            </div>
          ) : cuProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">추천할 수 있는 상품이 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cuProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FF] rounded-[20px] p-4 flex flex-col items-center"
                >
                  <div className="w-full aspect-square relative mb-4">
                    <Image
                      src={product.이미지URL}
                      alt={product.상품명}
                      width={200}
                      height={200}
                      className="rounded-lg object-contain"
                      unoptimized
                    />
                  </div>
                  <h6 className="font-semibold text-center mb-2">
                    {product.상품명}
                  </h6>
                  <p className="text-[#6366F1] font-bold">
                    {parseInt(product.가격.replace(/,/g, "")).toLocaleString()}
                    원
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 공유 버튼 */}
      <div className="text-center mb-8">
        <ShareButtons
          testResult={{
            type: "mbti",
            result: {
              mbtiType: result.type,
              personalityType: mbtiType.type,
            },
          }}
        />
      </div>

      {/* 다시하기 버튼 */}
      <div className="text-center">
        <Link
          href="/test"
          className="inline-block px-8 py-4 bg-[#6366F1] text-white rounded-full font-semibold hover:bg-[#5457E5] transition-colors duration-200"
        >
          테스트 다시하기
        </Link>
      </div>
    </div>
  );
}
