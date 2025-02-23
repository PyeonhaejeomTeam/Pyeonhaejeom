"use client";

import { useState, useEffect, useMemo } from "react";
import { storeInfo } from "@/assets/data/storeData/storeInfo";
import { cuData } from "@/assets/data/storeData/cuData";

export default function StoreProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedStore, setSelectedStore] = useState("cu");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const productsPerPage = 30;

  // 카테고리 목록 메모이제이션
  const defaultCategories = useMemo(() => [
    "전체",
    "간편식사",
    "즉석조리",
    "음료",
    "생활용품",
  ], []);

  useEffect(() => {
    setIsLoading(true);
    try {
      if (selectedStore === "cu") {
        // 데이터를 배열로 변환
        const productsArray = Object.values(cuData).flat();
        setProducts(productsArray);
        setFilteredProducts(productsArray);
      }
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다:", error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedStore]);

  const filterProducts = useMemo(() => {
    return (category, term) => {
      let filtered = [...products];

      if (category && category !== "전체") {
        filtered = filtered.filter(
          (product) => product.카테고리.trim() === category.trim()
        );
      }

      if (term) {
        filtered = filtered.filter((product) =>
          product.상품명.toLowerCase().includes(term.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
      setPage(1); // 필터링할 때마다 첫 페이지로 이동
    };
  }, [products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, searchTerm);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterProducts(selectedCategory, term);
  };

  // 현재 페이지에 표시할 상품들
  const currentProducts = useMemo(() => {
    const startIndex = (page - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, page, productsPerPage]);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">편의점 상품 목록</h1>

      {/* 편의점 선택 */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.entries(storeInfo).map(([key, store]) => (
          <button
            key={key}
            onClick={() => setSelectedStore(key)}
            className={`px-6 py-2 rounded-full transition ${
              selectedStore === key
                ? `bg-[${store.color}] text-white`
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {store.name}
          </button>
        ))}
      </div>

      {/* 검색 및 필터 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {defaultCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="상품명 검색..."
          className="w-full max-w-md mx-auto block px-4 py-2 border rounded-full"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>

      {/* 상품 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-3 text-center py-8">
            데이터를 불러오는 중...
          </div>
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div
              key={`${product.상품명}-${index}`}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={`https://${product.이미지URL}`}
                alt={product.상품명}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-bold mb-2">{product.상품명}</h3>
              <p className="text-purple-600">{product.가격}</p>
              <p className="text-gray-600 text-sm">{product.카테고리}</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8">상품이 없습니다.</div>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            이전
          </button>
          <span className="px-4 py-2">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}
