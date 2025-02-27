"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Roulette from "@/components/RouletteContent";
import ShareButtons from "@/components/ShareButtons";
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
        const response = await fetch("/cuData.csv");
        const csvText = await response.text();

        // CSV 파싱
        const rows = csvText.split("\n");
        const headers = rows[0].split(",").map((h) => h.trim());
        const products = rows
          .slice(1)
          .map((row) => {
            // 쌍따옴표로 묶인 필드 처리를 위한 정규식
            const values = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
            const product = {};

            headers.forEach((header, index) => {
              let value = values[index] || "";
              // 쌍따옴표 제거
              value = value.replace(/^"|"$/g, "").trim();
              product[header] = value;
            });

            return product;
          })
          .filter(
            (product) => product.상품명 && product.가격 && product.이미지URL
          ); // 필수 필드가 있는 상품만 필터링

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
    <div className="result-container">
      <div className="result-header">
        <h1 className="result-title">당신의 편의점 취향 분석 결과</h1>
        <div className="result-description">
          {personalityResult.description}
        </div>
      </div>

      <div className="result-card">
        <h2 className="text-2xl font-bold mb-6 text-[#6366F1]">
          맞춤 추천 메뉴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#6366F1]">
                {item.상품명}
              </h3>
              <p className="text-gray-600">{item.가격}</p>
            </div>
          ))}
        </div>
      </div>

      {!showRoulette ? (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowRoulette(true)}
            className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#9f67ff] text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
          >
            랜덤 메뉴 추천받기
          </button>
        </div>
      ) : (
        <div className="result-card mt-8">
          <h2 className="text-2xl font-bold mb-6 text-[#6366F1]">
            오늘의 랜덤 추천
          </h2>
          <Roulette items={recommendations.map((item) => item.상품명)} />
        </div>
      )}

      <section className="share_section fade_in mt-12">
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
