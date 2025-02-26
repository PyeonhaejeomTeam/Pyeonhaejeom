import React, { useState } from "react";
import { calculateMBTIResult } from "@/utils/mbtiUtils";
import MBTIQuestionContent from "./MBTIQuestionContent";
import MBTIResultContent from "./MBTIResultContent";

export default function MBTITest() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleComplete = (answers) => {
    const mbtiResult = calculateMBTIResult(answers);
    setResult(mbtiResult);
    setShowResult(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!showResult ? (
        <MBTIQuestionContent onComplete={handleComplete} />
      ) : (
        <MBTIResultContent result={result} />
      )}
    </div>
  );
}
