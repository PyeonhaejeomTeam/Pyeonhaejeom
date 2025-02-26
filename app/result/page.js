"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ResultContent from "@/components/result/ResultContent";

export default function Result() {
  const [answers, setAnswers] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // 로컬 스토리지에서 답변 가져오기
    const savedAnswers = localStorage.getItem("surveyAnswers");
    if (!savedAnswers) {
      router.push("/"); // 답변이 없으면 홈으로 이동
      return;
    }
    setAnswers(JSON.parse(savedAnswers));
  }, [router]);

  if (!answers) {
    return (
      <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center">
        <div className="text-2xl text-[#6366F1] font-bold mb-4">
          결과를 분석중...
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6366F1]"></div>
      </div>
    );
  }

  return <ResultContent answers={answers} />;
}
