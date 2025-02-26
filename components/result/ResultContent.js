"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Roulette from "@/components/Roulette";
import ShareButtons from "@/components/result/ShareButtons";
import Image from "next/image";
import { calculateResult } from "@/utils/calculateResult";

export default function ResultContent({ answers }) {
  const [showRoulette, setShowRoulette] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [personalityResult, setPersonalityResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Answers received:", answers);
    if (!answers) {
      setError("답변 데이터가 없습니다.");
      setLoading(false);
      return;
    }

    async function fetchResults() {
      try {
        // 성향 점수 계산 로직 수정
        const personalityScore = answers.reduce((acc, curr) => {
          switch (curr) {
            case "low":
            case "korean":
            case "light":
            case "instant":
            case "calorie":
            case "cold":
            case "safe":
              return acc + 0;
            case "spicy":
            case "meat":
            case "dessert_needed":
              return acc + 1;
            default:
              return acc;
          }
        }, 0);

        console.log("Calculated personality score:", personalityScore);

        const personalityTypes = {
          0: {
            title: "실용적인 미식가",
            description:
              "당신은 실용적이면서도 맛있는 음식을 선호하는 편입니다. 가성비와 맛 모두를 중요하게 생각하시네요!",
            characteristics: ["실용성 추구", "균형 잡힌 선택", "합리적 소비"],
          },
          1: {
            title: "모험적인 미식가",
            description:
              "새로운 맛과 도전을 즐기는 당신! 편의점에서도 새로운 제품을 찾아 시도하는 것을 좋아하시네요.",
            characteristics: ["호기심 많음", "도전적", "트렌드에 민감"],
          },
          2: {
            title: "감성적인 미식가",
            description:
              "음식을 통해 위로받고 행복을 찾는 당신! 편의점 음식에서도 소소한 행복을 발견하시네요.",
            characteristics: ["감성적", "포근함 추구", "음식을 통한 힐링"],
          },
        };

        const type = personalityScore % 3;
        console.log("Personality type:", type);

        if (type in personalityTypes) {
          setPersonalityResult(personalityTypes[type]);
        } else {
          throw new Error("성향 유형을 찾을 수 없습니다.");
        }

        // 제품 추천 결과 가져오기
        console.log("Fetching products...");
        const response = await fetch("/api/products");
        const products = await response.json();
        console.log("Products received:", products);

        const getRecommendations = calculateResult(answers);
        const recommendedProducts = getRecommendations(products);
        console.log("Recommended products:", recommendedProducts);

        if (!recommendedProducts || recommendedProducts.length === 0) {
          throw new Error("추천 상품을 찾을 수 없습니다.");
        }

        setRecommendations(recommendedProducts);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message || "결과를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [answers]);

  const handleRouletteComplete = (item) => {
    console.log("선택된 메뉴:", item);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center">
        <div className="text-2xl text-[#6366F1] font-bold mb-4">
          결과를 분석중...
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center">
        <div className="text-2xl text-red-500 font-bold mb-4">{error}</div>
        <Link href="/" className="button">
          다시 테스트하기
        </Link>
      </div>
    );
  }

  if (!personalityResult || !recommendations.length) {
    return (
      <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center">
        <div className="text-2xl text-[#6366F1] font-bold mb-4">
          데이터를 불러올 수 없습니다.
        </div>
        <Link href="/" className="button">
          다시 테스트하기
        </Link>
      </div>
    );
  }

  return (
    <div className="result_container">
      {/* 성향 분석 결과 섹션 */}
      <section className="personality_result mb-16">
        <h1 className="result_title mb-8">{personalityResult.title}</h1>
        <div className="bg-white rounded-[28px] p-8 shadow-lg">
          <p className="text-lg text-center text-gray-700 mb-8">
            {personalityResult.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {personalityResult.characteristics.map((trait, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#F8F9FF] text-[#6366F1] rounded-full font-medium"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 추천 메뉴 섹션 */}
      <section className="recommended_menu mb-16">
        <h2 className="text-2xl font-bold text-center text-[#6366F1] mb-8">
          당신을 위한 추천 메뉴
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-6 flex flex-col items-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
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
      </section>

      {/* 룰렛 섹션 */}
      <section className="roulette_section mb-16">
        <h3 className="text-2xl font-bold text-center text-[#6366F1] mb-8">
          오늘의 랜덤 메뉴 추천
        </h3>
        {showRoulette ? (
          <Roulette
            items={recommendations}
            onComplete={handleRouletteComplete}
          />
        ) : (
          <div className="button_group">
            <button className="button" onClick={() => setShowRoulette(true)}>
              랜덤 메뉴 뽑기
            </button>
            <Link href="/" className="button">
              다시 테스트하기
            </Link>
          </div>
        )}
      </section>

      {/* 공유 섹션 */}
      <section className="share_section fade_in">
        <ShareButtons
          testResult={{
            personality: personalityResult,
            recommendations: recommendations,
          }}
        />
      </section>
    </div>
  );
}
