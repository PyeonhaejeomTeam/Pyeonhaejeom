"use client";

import { useState, useEffect } from "react";
import GameContent from "@/components/GameContent";

export default function Game() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("/api/questions");
        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (error) {
        console.error("질문을 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  if (loading) return <div className="loading">질문을 불러오는 중...</div>;

  return <GameContent questions={questions} />;
}
