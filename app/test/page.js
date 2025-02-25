"use client";

import { useState } from "react";
import QuestionPage from "@/components/QuestionPage";
import questions from "@/questions"; // questions.js 파일에서 질문들을 가져옵니다

export default function TestPage() {
  return (
    <div>
      <QuestionPage questions={questions} />
    </div>
  );
}
