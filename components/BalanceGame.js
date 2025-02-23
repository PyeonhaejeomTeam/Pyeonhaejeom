"use client";

import { useState } from "react";

export default function BalanceGame({ question, option1, option2 }) {
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState({ option1: 0, option2: 0 });

  const handleSelect = (option) => {
    setSelected(option);
    // 실제 구현에서는 API를 통해 결과를 서버에 전송하고 전체 통계를 받아올 수 있습니다
    setResults((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-center mb-6">{question}</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleSelect("option1")}
          className={`p-4 rounded-lg border-2 transition ${
            selected === "option1"
              ? "border-purple-600 bg-purple-50"
              : "border-gray-200 hover:border-purple-300"
          }`}
        >
          {option1}
          {selected && (
            <div className="mt-2 text-sm text-gray-500">
              {Math.round(
                (results.option1 / (results.option1 + results.option2)) * 100
              )}
              %
            </div>
          )}
        </button>
        <button
          onClick={() => handleSelect("option2")}
          className={`p-4 rounded-lg border-2 transition ${
            selected === "option2"
              ? "border-purple-600 bg-purple-50"
              : "border-gray-200 hover:border-purple-300"
          }`}
        >
          {option2}
          {selected && (
            <div className="mt-2 text-sm text-gray-500">
              {Math.round(
                (results.option2 / (results.option1 + results.option2)) * 100
              )}
              %
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
