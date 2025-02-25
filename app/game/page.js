"use client";

import { useState } from "react";
import questions from "@/questions"; // 우리가 만든 questions.js 파일 import
import QuestionPage from "@/components/QuestionPage";

export default function Game() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <QuestionPage questions={questions} />
    </div>
  );
}
