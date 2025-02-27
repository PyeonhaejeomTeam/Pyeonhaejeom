"use client";

import { useState, useEffect } from "react";
import Roulette from "@/components/RouletteContent";
import Image from "next/image";

export default function RoulettePage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/cuData.csv");
        const csvText = await response.text();

        // CSV 텍스트를 파싱 (쉼표가 포함된 필드 처리)
        const parseCSVLine = (line) => {
          const values = [];
          let value = "";
          let withinQuotes = false;

          for (let char of line) {
            if (char === '"') {
              withinQuotes = !withinQuotes;
            } else if (char === "," && !withinQuotes) {
              values.push(value.trim());
              value = "";
            } else {
              value += char;
            }
          }
          values.push(value.trim());
          return values;
        };

        const rows = csvText
          .split("\n")
          .map((row) => row.trim())
          .filter((row) => row.length > 0);

        const headers = parseCSVLine(rows[0]);
        const allProducts = rows.slice(1).map((row) => {
          const values = parseCSVLine(row);
          const product = {};
          headers.forEach((header, index) => {
            // 따옴표 제거 및 특수 문자 처리
            let value = values[index] || "";
            value = value.replace(/^["']|["']$/g, ""); // 앞뒤 따옴표 제거
            product[header.replace(/^["']|["']$/g, "")] = value;
          });
          return product;
        });

        // 디버깅을 위한 로그
        console.log("Parsed products:", allProducts[0]);

        // 24개의 랜덤 제품 선택
        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 24));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleRouletteComplete = (product) => {
    setSelectedProduct(product);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center">
        <div className="text-2xl text-[#6366F1] font-bold mb-4">
          룰렛 준비중...
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FF] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#6366F1] mb-12">
          오늘의 랜덤 메뉴 룰렛
        </h1>

        <div className="flex flex-col items-center">
          <Roulette items={products} onComplete={handleRouletteComplete} />

          {selectedProduct && (
            <div className="mt-16 w-full max-w-md bg-white rounded-3xl shadow-lg p-8 relative z-10">
              <h2 className="text-2xl font-bold text-center text-[#6366F1] mb-6">
                선택된 메뉴
              </h2>
              <div className="flex flex-col items-center">
                <div className="relative w-80 h-80 mb-6 bg-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={selectedProduct.이미지URL}
                      alt={selectedProduct.상품명}
                      fill
                      className="object-contain"
                      sizes="(max-width: 320px) 100vw, 320px"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center px-4 w-full">
                  {selectedProduct.상품명}
                </h3>
                <p className="text-[#6366F1] text-2xl font-bold">
                  {selectedProduct.가격}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
