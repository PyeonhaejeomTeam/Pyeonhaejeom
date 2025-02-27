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
    <div className="mbti-result-container">
      {/* MBTI 유형 */}
      <div className="mbti-result-header">
        <h2 className="mbti-result-type">{result.type}</h2>
        <h3 className="mbti-result-title">{mbtiType.type}</h3>
        <div className="mbti-result-description">{mbtiType.description}</div>
      </div>

      {/* 성향 분석 그래프 */}
      <div className="mbti-chart">
        <h4 className="mbti-chart-title">성향 분석</h4>
        <div className="space-y-6">
          {Object.entries(result.percentages).map(([key, value]) => (
            <div key={key} className="mbti-chart-bar">
              <div className="mbti-chart-labels">
                <span className="mbti-chart-label">{key.charAt(0)}</span>
                <span className="mbti-chart-label">{key.charAt(1)}</span>
              </div>
              <div className="mbti-chart-progress">
                <div
                  className="mbti-chart-fill"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
              <span className="mbti-chart-value">{value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* 특성 카드 */}
      <div className="mbti-traits">
        {/* 강점 */}
        <div className="mbti-trait-card">
          <h4 className="mbti-trait-title">강점</h4>
          <ul className="mbti-trait-list">
            {mbtiType.strengths.map((strength, index) => (
              <li key={index} className="mbti-trait-item">
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* 약점 */}
        <div className="mbti-trait-card">
          <h4 className="mbti-trait-title">약점</h4>
          <ul className="mbti-trait-list">
            {mbtiType.weaknesses.map((weakness, index) => (
              <li key={index} className="mbti-trait-item">
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 추천 직업 */}
      <div className="mbti-trait-card">
        <h4 className="mbti-trait-title">추천 직업</h4>
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

      {/* CU 추천 상품 */}
      <div className="mbti-recommendations">
        <h4 className="mbti-recommendations-title">
          당신의 MBTI 유형에 맞는 CU 추천 상품
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
          <div className="mbti-recommendations-grid">
            {cuProducts.map((product, index) => (
              <div key={index} className="mbti-recommendation-card">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={product.이미지URL}
                    alt={product.상품명}
                    width={200}
                    height={200}
                    className="mbti-recommendation-image"
                    unoptimized
                  />
                </div>
                <h6 className="mbti-recommendation-name">{product.상품명}</h6>
                <p className="mbti-recommendation-price">
                  {parseInt(product.가격.replace(/,/g, "")).toLocaleString()}원
                </p>
              </div>
            ))}
          </div>
        )}
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
        <Link href="/test" className="button">
          테스트 다시하기
        </Link>
      </div>
    </div>
  );
}
